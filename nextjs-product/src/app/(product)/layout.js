import DefaultLayout from "../layouts/DefaultLayout"

export default function layout({children}) {
    return (
        <DefaultLayout>
            {children}
        </DefaultLayout>
    )
}