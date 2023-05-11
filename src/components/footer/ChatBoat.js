import dynamic from 'next/dynamic';
import 'react-chat-widget/lib/styles.css';
const DynamicWidget = dynamic(() => import('react-chat-widget').then(mod => mod.Widget), {
    ssr: false
});

function ChatBoat() {
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Here you can add your own code to handle the new message
    };

    return (
        <div>
            <DynamicWidget
                emojis={true}
                handleNewUserMessage={handleNewUserMessage}
            />
        </div>
    );
}


export default ChatBoat;
