module.exports = ChatRoomTemplate = (room_id) => {
    return `
        <div id="${room_id}" class="chat-room">
            <div class="chat-room-header"></div>
            <div id="${room_id}" class="chat-room-content"></div>
            <div class="chat-room-footer"></div>
        </div>
    `;
}