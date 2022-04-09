import { createHmac }  from "crypto"

const secret = 'abc124';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);