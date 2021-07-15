<template>
  <main>
      <section class="win" v-if="getWinnerState().player1">
        Le joueur 1 a gagné !
        <button @click="startNewGame()">Recommencer</button>
      </section>
      <section  class="win" v-if="getWinnerState().player2">
        Le joueur 2 a gagné !
        <button @click="startNewGame()">Recommencer</button>
      </section>
    <section class="new_game">
      <button @click="startNewGame()">New game</button>
    </section>
    <section class="players">
      <section class="player">
        <h2>Player 1</h2>
        <div class="score" id="player_1_score">{{getPlayersScore().player1}}</div>
      </section>
      <section class="player">
        <h2>Player 2</h2>
        <div class="score" id="player_2_score">{{getPlayersScore().player2}}</div>
      </section>
    </section>
    <section class="footer">
      <section class="current">
        <h3>Current</h3>
        <span id="player_1_current">{{getPlayersCurrentScore().player1}}</span>
      </section>
      <ul>
        <li>
          <button @click="rollTheDice()">Roll the dice</button>
        </li>
        <li>
          <button @click="hold()">Hold</button>
        </li>
      </ul>
      <section class="current">
        <h3>Current</h3>
        <span id="player_2_current">{{getPlayersCurrentScore().player2}}</span>
      </section>
    </section>
  </main>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Home',
  methods:{
    ...mapActions('games', ['startNewGame', 'hold', 'rollTheDice']),
    ...mapGetters('games', ['getPlayersScore', 'getPlayersCurrentScore', 'getRoundState', 'getWinnerState'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
*{
  font-family: 'Roboto', sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
}

body{
  main{
    display: flex;
    flex-direction: column;
    position: relative;

    .win{
      width:100%;
      height:100vh;
      background-color: rgba(255, 255, 255, 0.77);
      position: absolute;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:30px;
      flex-direction: column;
      button{
        width:200px;
        height:50px;
        border:none;
        font-weight: 300;
        text-transform: uppercase;
        font-size:20px;
        background-color:#eb4d4c;
        border-radius:10px;
        color:#FFF;
        margin-top:20px;
        &:hover{
          background-color: lighten(#eb4d4c, 10);
          cursor: pointer;
          color:#FFF;
        }
      }
    }

    .new_game{
      width:100%;
      display: flex;
      justify-content: center;
      position: absolute;
      top:0;
      button{
        width:200px;
        height:90px;
        border:none;
        font-weight: 300;
        background-color: transparent;
        text-transform: uppercase;
        font-size:20px;
        &:hover{
          background-color: darken(#eb4d4c, 3);
          cursor: pointer;
          color:#FFF;
        }
      }
    }

    .players{
      display: flex;
      height:100vh;
      .player{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
          width:100%;
          text-transform: uppercase;
          font-size:40px;
          font-weight: 300;
          display: flex;
          justify-content: center;
        }

        .score{
          color: #ff0000;
          font-weight: 100;
          font-size:80px;
          display: flex;
          justify-content: center;
        }
      }
      .player:first-child{
        background-color: darken(#FFF, 3);
      }

      .player:last-child{
        background-color: #FFF;
      }

    }

    .footer{
      display: flex;
      width:100%;
      justify-content: space-around;
      position: absolute;
      bottom:100px;


      .current{
        background-color: #eb4d4c;
        width:150px;
        height:100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
          color:#000;
          font-size:14px;
          font-weight: 300;
          text-transform: uppercase;
        }
        span{
          color:#FFF;
          font-size:30px;
          font-weight: 300;
        }
      }

      ul{
        display: flex;
        flex-direction: column;
        height:100%;
        justify-content: center;
        li{
          list-style: none;
          margin-top:20px;
          text-align: center;
          width:200px;
          height:50px;
          button{
            text-transform: uppercase;
            background-color: transparent;
            border:none;
            font-size:20px;
            font-weight: 300;
            width:100%;
            height:100%;
            &:hover{
              background-color: darken(#eb4d4c, 3);
              cursor: pointer;
              color:#FFF;
            }
          }
        }
      }
    }
  }
}
</style>
