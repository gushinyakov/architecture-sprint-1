import { useEffect, useState } from "react"
import eventEmitter from 'shared_feature/event-emitter';
import NotificationPopup from "./NotificationPopup";

const Notification = () => {
    const [open, setOpen] = useState<{ status: 'success' | 'error', text: string } | null>(null);

    const subscribeNotificationChange = (data: { status: 'success' | 'error', text: string }) => {
        setOpen(data)
    }

    const handleClose = () => {
        setOpen(null)
    }

    useEffect(() => {
        eventEmitter.subscribe('notification-open', subscribeNotificationChange);

        return () => {
            eventEmitter.unsubscribe('notification-open', subscribeNotificationChange);
        }
    }, [])

    if (!open) {
        return null
    }

    return <NotificationPopup
        onClose={handleClose}
        isOpen
        status={open.status}
        text={open.text}
    />
}


export default Notification
