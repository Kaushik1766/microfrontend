import React, { Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Chat from './pages/chat'
import ChatHistory from './pages/chatHistory'


function Routing() {
    return (
        <Routes>
            <Route index element={<div>sdgdfsgdfg</div>} />
            <Route path='chat' element={<div> static layout <Outlet /></div>} >
                <Route index element={<div><Chat />  </div>} />
                <Route path=':id' element={<ChatHistory />} />
            </Route>
        </Routes>
    )
}

export default Routing