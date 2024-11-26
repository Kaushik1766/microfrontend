import React, { Suspense } from 'react'
import { lazy } from 'react'

//@ts-expect-error
const Chat = lazy(() => import('chat/App'))

function index() {
    return (
        <Suspense>
            <Chat />
        </Suspense>
    )
}

export default index