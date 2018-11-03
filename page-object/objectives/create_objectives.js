import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';
import { createRole } from './../login.js';
  
    
fixture `Objectives`
    .beforeEach(async t => {
        const role = createRole('kalves@rallydev.com');
        await t
            .useRole(role)
            .navigateTo('https://rng.testn.f4tech.com/#/objectives');
    })

test('Create a new Objective', async t =>{
    const newObjective = Selector('#site-outer-flex > div > div > div > div:nth-child(1) > div > div > div > div.css-dioim5 > div > div:nth-child(2)')
    const createObjective = Selector('.is-invalid.pic-EditorsStringEditor')
    const saveObjective = Selector('.pic-QuickDetailEntityFooter-saveButton')

    await t
    .click(newObjective) 
    .typeText(createObjective, 'Objective One')
    .click(saveObjective)
    .expect(saveObjective).ok('it passed')    
})     

