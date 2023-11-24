import {HttpResponse, http} from "msw";
export const handlers = [
    http.post('/signup/email-auth/send', async ({request})=>{
        const email = await request.json().then(data => data.email);
        console.log(`requested email: ${email}`);
        if(email === 'test123@test.com'){
            return new HttpResponse(null,{
                status: 409,
            })
        }else {
            return new HttpResponse(null,{
                status: 200,
            })
        }
    }),
]