const timestamp = new Date().toISOString().replace(/:/g, '-');
describe(`color-test-${timestamp}`, () => {
  it('should change the background color on button click', () => {
    // 1. 페이지 로드
    cy.visit('http://localhost:3000/');

    // 2. 버튼 클릭
    cy.get('#light-nav-button').click();
    // 3. 색상 변경 확인

    cy.screenshot(`home-light-${timestamp}`);

    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('#dark-nav-button').click();

    cy.screenshot(`home-dark-${timestamp}`);
    cy.get('body').should('have.css', 'background-color', 'rgb(24, 24, 27)');

    cy.viewport('iphone-6'); // Set viewport to 375px x 667px
    cy.screenshot(`iphone-6-${timestamp}`);

    cy.viewport('macbook-13'); // Set viewport to 375px x 667px
    cy.screenshot(`macbook-13-${timestamp}`);

    cy.viewport('samsung-s10'); // Set viewport to 375px x 667px
    cy.screenshot(`samsung-s10-${timestamp}`);
  });
});
