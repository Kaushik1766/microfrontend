import { Suspense } from 'react'
import { lazy } from 'react'
import { useParams } from 'react-router-dom'

//@ts-expect-error
const ChatHistory = lazy(() => import('chat/ChatHistory'))

function index() {
    const { id } = useParams()
    return (
        <Suspense>
            <ChatHistory chatId={id} />
        </Suspense>
    )
}

export default index