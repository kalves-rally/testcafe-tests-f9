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

    test('Delete an Objective', async t =>{
        const objectivesTableRow = Selector('.pic-PopoverTrigger').nth(0)
        const actionsMenu = Selector('.pic-QuickDetailEntityHeader-buttons .css-pusqig').nth(0)
        const deleteOption = Selector('.css-4t018s')
        
        await t
        .click(objectivesTableRow)
        .click(actionsMenu)
        .click(deleteOption)
        .expect(deleteOption).ok('it passed')
    })     