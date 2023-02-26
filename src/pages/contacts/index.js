import { AboutPage } from "@/components/pagesComponents/AboutPage";
import PageWithHead from "@/components/reusableComponents/PageWithHead";

export default function Contacts() {
    return (
        <PageWithHead title={'Контакты'} pageComponent={<AboutPage/>}/>
    )
}