import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';
import { createRole } from './../login.js';
  
    
fixture `Objectives`
    .beforeEach(async t => {
        const role = createRole('kalves@rallydev.com');
        await t
            .useRole(role)
            .navigateTo('https://rng.testn.f4tech.com//#/team/plan/board');
    })

test('Create a New Work Item', async t =>{
    const createWorkItem = Selector('span.css-u6rgtt')
    const nameEditor = Selector('.pic-EditorsStringEditor')
    const saveButton = Selector('.pic-QuickDetailEntityFooter-saveButton')

    await t
    .click(createWorkItem) 
    .typeText(nameEditor, 'User Story One')
    .click(saveButton)
    .expect(saveButton).ok('it passed')
})

test('Delete a Work Item', async t =>{
    const storiesListCheckbox = Selector('span.css-1qs0vcj').nth(0)
    const deleteIcon = Selector('.pic-ToolbarDeleteButton')

    await t
    .click(storiesListCheckbox)
    .click(deleteIcon)
    .expect(deleteIcon).ok('it passed')
})
