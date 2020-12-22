window.onload = function(){
  const inp = document.getElementById('inp');
  const nameList = document.getElementById('nameList')
  const display = document.getElementById('display')
  const giveATry = document.getElementById('give-a-try')
  const firstPosition = document.getElementById('first-position')
  const secondPosition = document.getElementById('second-position')
  const thirdPosition = document.getElementById('third-position')

  const participantNames = [];

  inp.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
      let newNames = event.target.value.split(', ')
      console.log(newNames)
    }
  })


// TODO: Extract Text From Text Area And Store it to an Array
// TODO: Render The Names Extracted From Text Area
// TODO: Shuffle The Names Array for Better Result
// TODO: Pick A Random Winner, Him/Her from The Names Array
// TODO: Display Winners Name


}