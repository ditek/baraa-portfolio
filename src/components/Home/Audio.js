import mp3_file from "../../Assets/Great Fairy's Fountain from Zelda but slowed and reverb.mp3";


function Audio() {
  return (
    <div>
    <audio id="myAudio" autoPlay loop>
      <source src={mp3_file} type="audio/mpeg" />
    </audio>
    </div>
  )
}

export default Audio