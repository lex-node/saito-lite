module.exports = ArcadeLeftSidebarTemplate = () => {
  return `
  <div class="arcade-controls">
      <div class="arcade-bars-menu">
        <div class="arcade-navigator-bars-menu register-username-check">
            <div class="arcade-sidebar-active-games-header" style="display:flex; align-items:center;justify-content: space-between">
	      <h2>Create Game</h2>
  	      <i id="games-add-game" class="icon-med fas fa-plus"></i>
            </div>
	    <div class="arcade-apps-wrapper">
              <ul class="arcade-apps" id="arcade-apps"></ul>
            </div>
        </div>
      </div>
  </div>
  <div class="email-chat"></div>
  `;
}
