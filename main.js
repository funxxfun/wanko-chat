$(() => {
  class Chat {
    constructor(){
      this.count = 0;//何問目かのカウント
      this.logs = [];//ユーザーがクリックした履歴
    }
    output(){
      this.textPush(questions[this.count]['title']);
    }
    textPush(text){
      $('#chat-ul').append(`<li>${text}</li>`);
    }
  }

  const chat = new Chat();
  chat.output();
});