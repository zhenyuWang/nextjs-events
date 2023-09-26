import { MongoClient } from 'mongodb'
const USERNAME = 'running-snail'
const PASSWORD = 'password'
export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@nextjs-study.grl6f0z.mongodb.net/?retryWrites=true&w=majority`
  )

  return client
}

export async function insertDocument(client, collection, document) {
  const db = client.db()

  return await db.collection(collection).insertOne(document)
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db()

  return await db.collection(collection).find().sort(sort).toArray()
}
