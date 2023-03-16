import { ProductionPage } from "@/components/pagesComponents/ProductionPage";
import PageWithHead from "@/components/reusableComponents/PageWithHead";

export default function Production() {
    return (
        <PageWithHead title={'О нас'} pageComponent={<ProductionPage/>}/>
    )
}