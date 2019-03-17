<template>
    <div class="chat container">
      <h2 class="center teal-text">Xorav Chat</h2>
      <div class="card">
        <div class="card-content">
          <ul class="messages">
            <li v-for="message in messages" :key="message.id">
              <span class="teal-text">{{ message.name }}</span>
              <span class="grey-text text-darken-3">{{message.content}}</span>
              <span class="grey-text time">{{message.timestamp}}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <newMessage :name="name"/>
        </div>
      </div>

    </div>
</template>

<script>
  import newMessage from './newMessage';
  import db from '@/firebase/init';
    export default {
        name: "Chat",
      props: ['name'],
      components: {
          'newMessage': newMessage
      },
      data (){
          return {
            messages: []
          }
      },
      methods: {

      },
      created(){
        let ref = db.collection('messages').orderBy('timestamp');

        ref.onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type == 'added'){
              let doc = change.doc;
              this.messages.push({
                id : doc.id,
                name: doc.data().name,
                content: doc.data().content,
                timestamp: doc.data().timestamp
              })
            }
          })
        })
      }
    }
</script>

<style scoped>
  .chat h2{
    font-size: 2.6rem;
    margin-bottom: 2.3rem;
  }
  .chat span {
    font-size: 1.4rem;
  }
  .chat .time {
    display: block;
    font-style: 1.2rem;
  }
</style>
