import { HomePage } from '@/components/pagesComponents/HomePage'
import PageWithHead from '@/components/reusableComponents/PageWithHead'

export default function Home() {

  return (
      <PageWithHead pageComponent={<HomePage/>}/>
  )
}
