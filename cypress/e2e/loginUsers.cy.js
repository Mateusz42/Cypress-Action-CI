describe('User can visit to GoIT page', () => {
    beforeEach('go to page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });

    it('Successfully login user 1 to the GoIt page', () => {
        cy.fixture('user1.json').then((user) => {

            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail, password);

            cy.url().should('include', 'homepage');
            cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should('be.visible');

        });
    });

    it('Successfully login user 2 to the GoIt page', () => {
        cy.fixture('user2.json').then((user) => {

            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail, password);

            cy.url().should('include', 'homepage');

        });
    });
}); 