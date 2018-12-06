import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';
import { createRole } from './../login.js';
  
    
fixture `Objectives`
    .beforeEach(async t => {
        const role = createRole('kalves@rallydev.com');
        await t
            .useRole(role)
            .navigateTo('https://rng.testn.f4tech.com/#/work/backlog$resizable$w_100');
    })

test('DnD a Work Item', async t =>{

    const rows = Selector('.pic-TableRow')
    const firstRow = Selector('.pic-TableRow').nth(0)
    const secondRow = Selector('.pic-TableRow').nth(1)

    await t
    .expect(rows).notEql(0)
    .dragToElement(firstRow, secondRow)
    //verify it has been dnd correctly
    .wait(2000)   
})     