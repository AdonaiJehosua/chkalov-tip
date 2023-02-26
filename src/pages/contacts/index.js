import { ContactsPage } from "@/components/pagesComponents/ContactsPage";
import PageWithHead from "@/components/reusableComponents/PageWithHead";
import { YMaps } from "@pbe/react-yandex-maps";

export default function Contacts() {
    return (
        <YMaps>
        <PageWithHead title={'Контакты'} pageComponent={<ContactsPage/>}/>
        </YMaps>
    )
}