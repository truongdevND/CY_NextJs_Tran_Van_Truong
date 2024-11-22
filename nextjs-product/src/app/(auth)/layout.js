import NoLayout from "../layouts/NoLayout"

export default function layout({children}) {
    return (
        <NoLayout>
            {children}
        </NoLayout>
    )
}