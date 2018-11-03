import { Role, Selector } from 'testcafe'; 

export const createRole = (username, password = 'Password') =>
    Role(
        'https://rng.testn.f4tech.com',
        async t => {
            await t
                .typeText('input[name="username"]', username)
                .typeText('input[name="password"]', password)
                .click('button[type="submit"]')
        },
        { preserveUrl: true },
    )



// import { Selector } from 'testcafe';

// var login = async t => {
//     await t
//     .typeText('input[name="username"]', 'kalves@rallydev.com')
//     .typeText('input[name="password"]', 'Password')
//     .click('button[type="submit"]')        
// }

// fixture `Logging in`
//     .page `https://rng.testn.f4tech.com`
//     .beforeEach(login)

// test('Log in', async t => {
//     await t
//     .typeText('input[name="username"]', 'kalves@rallydev.com')
//     .typeText('input[name="password"]', 'Password')
//     .click('button[type="submit"]')
//     .expect('span.css-4acz0r').ok('it passed')   
// });    