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
                    <a href="index.html" data-type="index-link">Web Application Documentation</a>
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
                                            'data-target="#components-links-module-AppModule-4cfc6708ae1cd1e0515e7121eccce3c7"' : 'data-target="#xs-components-links-module-AppModule-4cfc6708ae1cd1e0515e7121eccce3c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4cfc6708ae1cd1e0515e7121eccce3c7"' :
                                            'id="xs-components-links-module-AppModule-4cfc6708ae1cd1e0515e7121eccce3c7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link">ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-757e50e36b5b4246af6e5146a912b995"' : 'data-target="#xs-components-links-module-ContactModule-757e50e36b5b4246af6e5146a912b995"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-757e50e36b5b4246af6e5146a912b995"' :
                                            'id="xs-components-links-module-ContactModule-757e50e36b5b4246af6e5146a912b995"' }>
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
                                            'data-target="#components-links-module-CoreModule-c6337a1f175dfb726eec4cad4724d2ed"' : 'data-target="#xs-components-links-module-CoreModule-c6337a1f175dfb726eec4cad4724d2ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-c6337a1f175dfb726eec4cad4724d2ed"' :
                                            'id="xs-components-links-module-CoreModule-c6337a1f175dfb726eec4cad4724d2ed"' }>
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
                                <a href="modules/DefaultModule.html" data-type="entity-link">DefaultModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DefaultModule-1f47787435e6fdf9db8cc8a747e0dbc8"' : 'data-target="#xs-components-links-module-DefaultModule-1f47787435e6fdf9db8cc8a747e0dbc8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefaultModule-1f47787435e6fdf9db8cc8a747e0dbc8"' :
                                            'id="xs-components-links-module-DefaultModule-1f47787435e6fdf9db8cc8a747e0dbc8"' }>
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
                                            'data-target="#components-links-module-EducationModule-d88f843c319307e4340b7ccdd6a6d5c3"' : 'data-target="#xs-components-links-module-EducationModule-d88f843c319307e4340b7ccdd6a6d5c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EducationModule-d88f843c319307e4340b7ccdd6a6d5c3"' :
                                            'id="xs-components-links-module-EducationModule-d88f843c319307e4340b7ccdd6a6d5c3"' }>
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
                                            'data-target="#components-links-module-ExperienceModule-ac951bccee2d5921e574c5dd06de87df"' : 'data-target="#xs-components-links-module-ExperienceModule-ac951bccee2d5921e574c5dd06de87df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExperienceModule-ac951bccee2d5921e574c5dd06de87df"' :
                                            'id="xs-components-links-module-ExperienceModule-ac951bccee2d5921e574c5dd06de87df"' }>
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
                                            'data-target="#components-links-module-FullPageModule-a901aa37ce81633b7209c8682e5da91c"' : 'data-target="#xs-components-links-module-FullPageModule-a901aa37ce81633b7209c8682e5da91c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FullPageModule-a901aa37ce81633b7209c8682e5da91c"' :
                                            'id="xs-components-links-module-FullPageModule-a901aa37ce81633b7209c8682e5da91c"' }>
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
                                            'data-target="#components-links-module-InfoModule-52b6eef835e53496176d7b71fde71aa1"' : 'data-target="#xs-components-links-module-InfoModule-52b6eef835e53496176d7b71fde71aa1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoModule-52b6eef835e53496176d7b71fde71aa1"' :
                                            'id="xs-components-links-module-InfoModule-52b6eef835e53496176d7b71fde71aa1"' }>
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
                                            'data-target="#components-links-module-PortfolioModule-f2450295aac5eb44a331598749bdddf4"' : 'data-target="#xs-components-links-module-PortfolioModule-f2450295aac5eb44a331598749bdddf4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortfolioModule-f2450295aac5eb44a331598749bdddf4"' :
                                            'id="xs-components-links-module-PortfolioModule-f2450295aac5eb44a331598749bdddf4"' }>
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
                                <a href="modules/ProjectsModule.html" data-type="entity-link">ProjectsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectsModule-eabc4d8e817ffb66650c484f6c87e240"' : 'data-target="#xs-components-links-module-ProjectsModule-eabc4d8e817ffb66650c484f6c87e240"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectsModule-eabc4d8e817ffb66650c484f6c87e240"' :
                                            'id="xs-components-links-module-ProjectsModule-eabc4d8e817ffb66650c484f6c87e240"' }>
                                            <li class="link">
                                                <a href="components/ProjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsRoutingModule.html" data-type="entity-link">ProjectsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublishModule.html" data-type="entity-link">PublishModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublishModule-381dea2559e96e19b9d3a4e0d935289d"' : 'data-target="#xs-components-links-module-PublishModule-381dea2559e96e19b9d3a4e0d935289d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublishModule-381dea2559e96e19b9d3a4e0d935289d"' :
                                            'id="xs-components-links-module-PublishModule-381dea2559e96e19b9d3a4e0d935289d"' }>
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
                                            'data-target="#components-links-module-SkillsModule-d815be2267f03f1dc5751063e590d55e"' : 'data-target="#xs-components-links-module-SkillsModule-d815be2267f03f1dc5751063e590d55e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SkillsModule-d815be2267f03f1dc5751063e590d55e"' :
                                            'id="xs-components-links-module-SkillsModule-d815be2267f03f1dc5751063e590d55e"' }>
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