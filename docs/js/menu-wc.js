'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/favicon.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' : 'data-target="#xs-components-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' :
                                            'id="xs-components-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' : 'data-target="#xs-injectables-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' :
                                        'id="xs-injectables-links-module-AppModule-3a121d278173a43ded4ba53f033b3572"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-18f9e503623d885e6d3c2a4be91b14ca"' : 'data-target="#xs-components-links-module-AuthModule-18f9e503623d885e6d3c2a4be91b14ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-18f9e503623d885e6d3c2a4be91b14ca"' :
                                            'id="xs-components-links-module-AuthModule-18f9e503623d885e6d3c2a4be91b14ca"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link">ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-634e25007de012baef21ca6b9508e6e3"' : 'data-target="#xs-components-links-module-ContactModule-634e25007de012baef21ca6b9508e6e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-634e25007de012baef21ca6b9508e6e3"' :
                                            'id="xs-components-links-module-ContactModule-634e25007de012baef21ca6b9508e6e3"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link">ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-001e14dbb8ffc59dc57e0563b9c45255"' : 'data-target="#xs-components-links-module-CoreModule-001e14dbb8ffc59dc57e0563b9c45255"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-001e14dbb8ffc59dc57e0563b9c45255"' :
                                            'id="xs-components-links-module-CoreModule-001e14dbb8ffc59dc57e0563b9c45255"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WellcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WellcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreRoutingModule.html" data-type="entity-link">CoreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DefaultModule.html" data-type="entity-link">DefaultModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DefaultModule-156c5b9e6d521df57b1aac744dd81a8e"' : 'data-target="#xs-components-links-module-DefaultModule-156c5b9e6d521df57b1aac744dd81a8e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefaultModule-156c5b9e6d521df57b1aac744dd81a8e"' :
                                            'id="xs-components-links-module-DefaultModule-156c5b9e6d521df57b1aac744dd81a8e"' }>
                                            <li class="link">
                                                <a href="components/DefaultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PdfModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EducationModule.html" data-type="entity-link">EducationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EducationModule-3a2f02d050534d028ba3f9386582295c"' : 'data-target="#xs-components-links-module-EducationModule-3a2f02d050534d028ba3f9386582295c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EducationModule-3a2f02d050534d028ba3f9386582295c"' :
                                            'id="xs-components-links-module-EducationModule-3a2f02d050534d028ba3f9386582295c"' }>
                                            <li class="link">
                                                <a href="components/EducationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EducationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EducationRoutingModule.html" data-type="entity-link">EducationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExperienceModule.html" data-type="entity-link">ExperienceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExperienceModule-a0135ac1440868201182fddd4131700b"' : 'data-target="#xs-components-links-module-ExperienceModule-a0135ac1440868201182fddd4131700b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExperienceModule-a0135ac1440868201182fddd4131700b"' :
                                            'id="xs-components-links-module-ExperienceModule-a0135ac1440868201182fddd4131700b"' }>
                                            <li class="link">
                                                <a href="components/ExperienceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExperienceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExperienceRoutingModule.html" data-type="entity-link">ExperienceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FullPageModule.html" data-type="entity-link">FullPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FullPageModule-37f07a572c14028077f589e5badc2a3d"' : 'data-target="#xs-components-links-module-FullPageModule-37f07a572c14028077f589e5badc2a3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FullPageModule-37f07a572c14028077f589e5badc2a3d"' :
                                            'id="xs-components-links-module-FullPageModule-37f07a572c14028077f589e5badc2a3d"' }>
                                            <li class="link">
                                                <a href="components/AlertModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FullPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FullPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoModule.html" data-type="entity-link">InfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InfoModule-610ffff0108a16dbbbba9d80f77d619e"' : 'data-target="#xs-components-links-module-InfoModule-610ffff0108a16dbbbba9d80f77d619e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoModule-610ffff0108a16dbbbba9d80f77d619e"' :
                                            'id="xs-components-links-module-InfoModule-610ffff0108a16dbbbba9d80f77d619e"' }>
                                            <li class="link">
                                                <a href="components/InfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoRoutingModule.html" data-type="entity-link">InfoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioModule.html" data-type="entity-link">PortfolioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortfolioModule-eece5e2d263e8cd4cf50a5e7c438e4ec"' : 'data-target="#xs-components-links-module-PortfolioModule-eece5e2d263e8cd4cf50a5e7c438e4ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortfolioModule-eece5e2d263e8cd4cf50a5e7c438e4ec"' :
                                            'id="xs-components-links-module-PortfolioModule-eece5e2d263e8cd4cf50a5e7c438e4ec"' }>
                                            <li class="link">
                                                <a href="components/PortfolioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PortfolioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioRoutingModule.html" data-type="entity-link">PortfolioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublishModule.html" data-type="entity-link">PublishModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublishModule-3e0dffebe8adddd4e80b8f470ffded19"' : 'data-target="#xs-components-links-module-PublishModule-3e0dffebe8adddd4e80b8f470ffded19"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublishModule-3e0dffebe8adddd4e80b8f470ffded19"' :
                                            'id="xs-components-links-module-PublishModule-3e0dffebe8adddd4e80b8f470ffded19"' }>
                                            <li class="link">
                                                <a href="components/PublishComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublishComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublishRoutingModule.html" data-type="entity-link">PublishRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SkillsModule.html" data-type="entity-link">SkillsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SkillsModule-edb13a7c92f370222decad2489422b0d"' : 'data-target="#xs-components-links-module-SkillsModule-edb13a7c92f370222decad2489422b0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SkillsModule-edb13a7c92f370222decad2489422b0d"' :
                                            'id="xs-components-links-module-SkillsModule-edb13a7c92f370222decad2489422b0d"' }>
                                            <li class="link">
                                                <a href="components/SkillsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SkillsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SkillsRoutingModule.html" data-type="entity-link">SkillsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SkillsService.html" data-type="entity-link">SkillsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DialogAlert.html" data-type="entity-link">DialogAlert</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogPdf.html" data-type="entity-link">DialogPdf</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Job.html" data-type="entity-link">Job</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Publication.html" data-type="entity-link">Publication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Site.html" data-type="entity-link">Site</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Skill.html" data-type="entity-link">Skill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});