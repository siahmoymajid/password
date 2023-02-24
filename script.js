
const genPass = () => {

  let len = prompt('How long do you want your pasword to be (8-128)?');
   if(len < 8 || len > 128) return alert('Wrong length.  Please try again.');

   let upper=confirm ('Will the password have uppercase letter?');
   let lower=confirm ('Will the password have lowercase letter?');
   let num=confirm ('Will the password have numbers?');
   let specialcharacters=confirm ('Will the password have specialcharacters?');

   let temp="";

   if (upper) temp+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   if (lower) temp+="abcdefghijklmnopqrstuvwxyz";
   if (num) temp+="0123456789";
   if (specialcharacters) temp+="!@$%&*_#~,.?/";
   
  let passwd = '';

  for (let i = 0; i < len; i++) {
    passwd+=temp[Math.floor(Math.random()*temp.length)];
  }

  console.log(temp);
  password.innerText=passwd;
}

generate.onclick = genPass;