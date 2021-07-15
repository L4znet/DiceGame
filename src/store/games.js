const games = {
    namespaced: true,
    state(){
        return {
            round:true,
            playersScore:{
                player1:0,
                player2:0
            },
            playersCurrentScore:{
                player1:0,
                player2:0
            },
            winner:{
                player1:false,
                player2:false
            },
        }
    },

    getters:{
        getRoundState(state){
            return state.round;
        },
        getPlayersScore(state){
            return state.playersScore;
        },
        getPlayersCurrentScore(state){
            return state.playersCurrentScore;
        },
        getWinnerState(state){
            return state.winner
        },
    },
    mutations:{
        UPDATE_ROUND_STATE(state, payload){
            state.round = payload
        },
        UPDATE_PLAYERS_SCORE(state, payload){
            state.playersScore = payload
        },
        UPDATE_PLAYERS_CURRENT_SCORE(state, payload){
            state.playersCurrentScore = payload
        },
        UPDATE_WINNER(state, payload){
            state.winner = payload
        }
    },

    actions:{
        startNewGame(context){
            context.commit('UPDATE_PLAYERS_CURRENT_SCORE', {player1:0, player2:0})
            context.commit('UPDATE_PLAYERS_SCORE', {player1:0, player2:0})
            context.commit('UPDATE_WINNER', {player1:false, player2:false})
        },
        rollTheDice(context){
            let currentDiceNumber = Math.round(Math.random() * (6 - 1) + 1);

            if(currentDiceNumber === 1){
                if(context.getters.getRoundState){
                    context.commit('UPDATE_ROUND_STATE', false)
                    context.getters.getPlayersCurrentScore.player1 = 0;

                    context.commit('UPDATE_PLAYERS_CURRENT_SCORE', context.getters.getPlayersCurrentScore)
                } else {
                    context.commit('UPDATE_ROUND_STATE', true)
                    context.getters.getPlayersCurrentScore.player2 = 0;

                    context.commit('UPDATE_PLAYERS_CURRENT_SCORE', context.getters.getPlayersCurrentScore)
                }
            } else {
                if(context.getters.getRoundState){
                    context.getters.getPlayersCurrentScore.player1 = parseInt(context.getters.getPlayersCurrentScore.player1) + currentDiceNumber;

                    context.commit('UPDATE_PLAYERS_CURRENT_SCORE', context.getters.getPlayersCurrentScore)
                } else {
                    context.getters.getPlayersCurrentScore.player2 = parseInt(context.getters.getPlayersCurrentScore.player2) + currentDiceNumber;

                    context.commit('UPDATE_PLAYERS_CURRENT_SCORE', context.getters.getPlayersCurrentScore)
                }
            }
        },

        hold(context){

            if(context.getters.getRoundState){

                context.getters.getPlayersScore.player1 = parseInt(context.getters.getPlayersScore.player1) + parseInt(context.getters.getPlayersCurrentScore.player1)

                context.commit('UPDATE_PLAYERS_SCORE', context.getters.getPlayersScore)

            } else {

                context.getters.getPlayersScore.player2 = parseInt(context.getters.getPlayersScore.player2) + parseInt(context.getters.getPlayersCurrentScore.player2)

                context.commit('UPDATE_PLAYERS_SCORE', context.getters.getPlayersScore)

            }

            context.dispatch('resetCurrentScore')
            context.dispatch('checkWin')
        },

        checkWin(context){
            console.log('fsdsfdsfd')
            console.log(context.getters.getPlayersScore.player1)
            console.log(context.getters.getPlayersScore.player2)
            if(context.getters.getRoundState === true && context.getters.getPlayersScore.player1 >= 100){
               // context.dispatch('startNewGame')
                console.log('ssdfsfdqsdffd')
                context.commit('UPDATE_WINNER', {player1:true, player2:false})
            } else if(context.getters.getRoundState === false && context.getters.getPlayersScore.player2 >= 100){
            //    context.dispatch('startNewGame')
                console.log('aaaa')
                context.commit('UPDATE_WINNER', {player1:false, player2:true})
            }
        },

        resetCurrentScore(context){
            if(context.getters.getRoundState === true){
                context.getters.getPlayersCurrentScore.player1 = 0
                context.commit('UPDATE_PLAYERS_CURRENT_SCORE', context.getters.getPlayersCurrentScore)
            } else {
                context.getters.getPlayersCurrentScore.player2 = 0
                context.commit('UPDATE_PLAYERS_CURRENT_SCORE', context.getters.getPlayersCurrentScore)
            }

        }
    },

}

export default games;