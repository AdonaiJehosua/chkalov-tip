import { ContactsPage } from "@/components/pagesComponents/ContactsPage";
import PageWithHead from "@/components/reusableComponents/PageWithHead";

export default function Contacts() {
    return (
        <PageWithHead title={'Контакты'} pageComponent={<ContactsPage/>}/>
    )
}