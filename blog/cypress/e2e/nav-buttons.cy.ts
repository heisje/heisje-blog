describe('Navigation Test', () => {
  it('Portfolio button', () => {
    // 페이지 방문
    cy.visit('http://localhost:3000/'); // 이 부분을 실제 테스트하고자 하는 페이지 URL로 변경하세요

    // 버튼 클릭
    cy.get('#Portfolio-nav-button').click();

    // 새 페이지 URL 확인
    cy.url().should('include', '/about');

    // 결과 확인
    cy.contains('Developer');
  });

  it('Posts button', () => {
    // 페이지 방문
    cy.visit('http://localhost:3000/'); // 이 부분을 실제 테스트하고자 하는 페이지 URL로 변경하세요

    // 버튼 클릭
    cy.get('#Posts-nav-button').click();

    // 새 페이지 URL 확인
    cy.url().should('include', '/posts');

    // 결과 확인
    cy.contains('김희제의 개발 포스팅');
  });

  it('theme button', () => {
    // 1. 페이지 로드
    cy.visit('http://localhost:3000/');

    // 2. 버튼 클릭
    cy.get('#light-nav-button').click();
    // 3. 색상 변경 확인
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('#dark-nav-button').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(24, 24, 27)');
  });
});
