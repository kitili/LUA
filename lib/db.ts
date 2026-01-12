import { Pool, QueryResultRow } from 'pg'

let pool: Pool | null = null

function getPool() {
  if (pool) return pool

  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set')
  }

  pool = new Pool({ connectionString })
  return pool
}

export async function query<T extends QueryResultRow = QueryResultRow>(text: string, params: any[] = []) {
  const client = getPool()
  return client.query<T>(text, params)
}

