import { AboutPage } from "@/components/pagesComponents/AboutPage";
import PageWithHead from "@/components/reusableComponents/PageWithHead";

export default function Production() {
    return (
        <PageWithHead title={'О нас'} pageComponent={<AboutPage/>}/>
    )
}