import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from '@firebase/firestore'
import { fireStorage, firestore } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage'

export type WorkpieceRes = {
  id: number
  title: string
  description: string
  imageUrl: string
}

export type WorkRes = {
  id: string
  representativeImage: string
  title: string
  workpieces?: WorkpieceRes[]
}

const accessDocFirebase = async (path: string) => {
  const column = doc(firestore, path)
  const snapshot = await getDoc(column)
  return snapshot.data()
}

const accessColumnFirebase = async (path: string) => {
  const column = collection(firestore, path)
  const snapshot = await getDocs(column)
  return snapshot.docs.map((doc) => doc.data())
}

export const getWorks = async () => {
  return (await accessColumnFirebase('works')) as WorkRes[]
}

export const getWork = async (workId: string) => {
  return (await accessDocFirebase(`works/${workId}`)) as WorkRes
}

export const addImage = async (file: File, filename: string) => {
  const storageRef = ref(fireStorage, `image/${filename}`)

  // 'file' comes from the Blob or File API
  const fileRef = await uploadBytes(storageRef, file)
  return await getDownloadURL(fileRef.ref)
}

export const imageUpload = async (file?: File) => {
  if (!file) {
    return
  }
  return await addImage(file, file.name)
}

export const addWork = async (work: WorkRes) => {
  const newWorkRef = doc(collection(firestore, 'works'))
  const workData = {
    representativeImage: work.representativeImage,
    title: work.title,
    id: newWorkRef.id
  }
  await setDoc(newWorkRef, workData)
}

export const updateWork = async (work: WorkRes) => {
  const newWorkRef = doc(firestore, 'works', work.id)
  await updateDoc(newWorkRef, work)
}
