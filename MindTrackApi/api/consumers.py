from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Accept the WebSocket connection
        await self.accept()
        # Join the chat room group
        await self.channel_layer.group_add("chat_room", self.channel_name)

    async def disconnect(self, close_code):
        # Leave the chat room group
        await self.channel_layer.group_discard("chat_room", self.channel_name)

    async def receive(self, text_data):
        # Handle incoming WebSocket messages
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        print("Message received")

        # Broadcast the message to everyone in the chat room
        await self.channel_layer.group_send(
            "chat_room",
            {
                'type': 'chat_message',
                'message': message
            }
        )

    async def chat_message(self, event):
        # Send the message to the WebSocket
        print("Sending msg back")
        message = event['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))
