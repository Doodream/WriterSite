import { collection, doc, getDocs, setDoc, updateDoc } from '@firebase/firestore'
import { fireStorage, firestore } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage'

export type WorkRes = {
  id: string
  representativeImage: string
  title: string
  workpieces: {
    title: string
    description: string
    imageUrl: string
  }[]
}

export const getWorks = async () => {
  const worksCol = collection(firestore, '/works')
  const worksSnapshot = await getDocs(worksCol)
  const worksList = worksSnapshot.docs.map((doc) => doc.data())
  return worksList as WorkRes[]
}

export const addImage = async (file: File, filename: string) => {
  const storageRef = ref(fireStorage, `image/${filename}`)

  // 'file' comes from the Blob or File API
  const fileRef = await uploadBytes(storageRef, file)
  return await getDownloadURL(fileRef.ref)
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
