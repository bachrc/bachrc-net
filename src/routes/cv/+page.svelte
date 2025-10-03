<script lang="ts">
  import photoAvif from '$lib/assets/photo.avif';
  import photoPng from '$lib/assets/photo.png';
  import photoWebp from '$lib/assets/photo.webp';
  import Experience from '$lib/components/Experience.svelte';
  import ThemesList from '$lib/components/ThemesList.svelte';
  import { t } from 'svelte-i18n';
</script>

<svelte:head>
  <title>bachrc - CV Yohann Bacha</title>
</svelte:head>
<div
  class="flex flex-col items-center gap-4 sm:text-sm sm:items-start sm:flex-row sm:gap-0 lg:container lg:mx-auto bg-indigo-100/50">
  <aside class="flex flex-col w-11/12 sm:w-1/4 p-4 text-justify">
    <div class="flex flex-col items-center mb-4 text-center">
      <picture>
        <source
          type="image/avif"
          srcset={photoAvif} />
        <source
          type="image/webp"
          srcset={photoWebp} />

        <img
          src={photoPng}
          alt={$t('mon-visage')}
          class="rounded-full h-48" />
      </picture>
      <span class="text-2xl font-bold">Yohann Bacha</span>
      <span>{$t('job_title')}</span>
    </div>
    <ul>
      <li>📍 Strasbourg</li>
      <li>
        🔐 <a
          href="https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x52141ffeb2160e20"
          class="underline underline-offset-2 text-blue-900">
          0x52141ffeb2160e20
        </a>
      </li>
    </ul>
    <hr class="my-4" />
    <div class="flex flex-col gap-2">
      <h1 class="text-xl">{$t('competences')}</h1>
      <div>
        <h2 class="text-lg mb-1">{$t('procedes')}</h2>
        <ThemesList
          themes={[
            'TDD',
            $t('architecture-hexagonale'),
            'DDD',
            'BDD',
            $t('poo'),
            'Simple Design',
            'Craft',
            'Architecture de solution'
          ]} />
      </div>
      <div>
        <h2 class="text-lg mb-1">{$t('backend')}</h2>
        <ThemesList
          themes={[
            'Rust',
            'Go',
            'Typescript',
            'Java',
            'Kotlin',
            'Python',
            'Postgres',
            'Kafka'
          ]} />
      </div>
      <div>
        <h2 class="text-lg mb-1">{$t('frontend')}</h2>
        <ThemesList
          themes={[
            'HTML/CSS',
            'Svelte',
            'Vue',
            'Tailwind',
            'React',
            'Progressive Web Apps'
          ]} />
      </div>
      <div>
        <h2 class="text-lg mb-1">{$t('ops')}</h2>
        <ThemesList
          themes={[
            'Docker',
            'Dev Containers',
            'Nix',
            'Git',
            'Gitlab CI',
            'Github Actions',
            'Linux',
            'OpenAPI'
          ]} />
      </div>
      <div>
        <h2 class="text-lg mb-1">Systèmes embarqués</h2>
        <ThemesList
          themes={[
            'Yocto',
            'Modem',
            'Système Linux intégré',
            'Systèmes embarqués',
            'SIM intégrée (eSIM)'
          ]} />
      </div>
      <hr class="ml-0 w-1/2" />
      <div>
        <h1 class="text-xl">{$t('formation')}</h1>
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <span>{$t('master-informatique-et-reseaux')}</span>
            <span>2015-2017</span>
          </div>
          <span>{$t('universite-du-havre')}</span>
        </div>
      </div>
      <hr class="ml-0 w-1/2" />
      <div>
        <h1 class="text-xl">{$t('langues')}</h1>
        <div class="grid grid-cols-3">
          <span>{$t('francais')}</span>
          <span class="col-span-2">{$t('langue-maternelle')} (C2)</span>
          <span>{$t('anglais')}</span>
          <span class="col-span-2">{$t('professionnel')} (C1)</span>
        </div>
      </div>
      <hr class="ml-0 w-1/2" />
      <div>
        <h1 class="text-xl">{$t('interets')}</h1>
        <ul>
          <li>{$t('cafe-de-specialite')}</li>
          <li>{$t('creation-musicale')}</li>
          <li>{$t('narration-non-lineaire')}</li>
          <li>{$t('randonnee')}</li>
          <li>{$t('auto-hebergement')}</li>
        </ul>
      </div>
    </div>
  </aside>

  <div class="flex flex-col w-11/12 sm:w-3/4 p-4 self-center gap-8">
    <h1 class="text-xl">{$t('experiences')}</h1>
    <Experience
      name="Tech Lead Java / Rust"
      employeur="Enedis"
      duree="07/2024 - aujourd'hui"
      themes={[
        'Java',
        'Rust',
        'Architecture Hexagonale',
        'DevContainers',
        'TDD',
        'Linux embarqué',
        'Yocto',
        'Modems',
        'DevOps'
      ]}>
      {#snippet frenchContent()}
          <p>
            J'ai rejoint Enedis en membre fondateur de l'équipe i2R, en charge du développement du boitier AO3. Notre équipe est responsable du logiciel présent sur le boitier AO3, en charge de faire la liaison avec les boîtiers Linky Pro et le SI Enedis.
          </p>
          <p>
            Sur ce projet où tout était à faire, mes fonctions comprennent entre autres:
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>Réappropriation des connaissances en interne du fonctionnement des boitiers constructeur</li>
            <li>Mise en place d'une stack de dev et CI uniforme basée sur les DevContainers</li>
            <li>Mise en place d'architecture hexagonale, accompagnement et formation de l'équipe aux problématiques de qualité logicielle</li>
            <li>Etude et réappropriation des connaissances concernant le fonctionnement des modems via port série</li>
            <li>Introduction de Rust pour le logiciel de fonctionnalités critiques, accompagnement et formation de l'équipe</li>
            <li>Création d'un firmware en Rust interagissant avec le modem par port série</li>
            <li>Présentation du projet auprès de différentes équipes et responsables</li>
          </ul>
          <p>
            Au sein de l'équipe, ce à quoi j'ai activement pris part :
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>Création d'une distribution Linux embarquée spécifique au hardware de l'AO3 avec Yocto</li>
            <li>Participation à l'élaboration des spécifications incluses dans l'appel d'offre</li>
            <li>Élaboration du backlog</li>
            <li>Développement du logiciel en Java et Rust régissant le boitier</li>
          </ul>
      {/snippet}
      {#snippet englishContent()}
          <p>
            I joined Enedis as a founding member of the i2R team, responsible for developing the AO3 device software. Our team is in charge of the software on the AO3 device, which handles the connection with Linky Pro devices and the Enedis information system.
          </p>
          <p>
            On this project where everything had to be built from scratch, my responsibilities included:
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>Internal knowledge appropriation of manufacturer device operations</li>
            <li>Implementation of a uniform dev stack and CI based on DevContainers</li>
            <li>Implementation of hexagonal architecture, team training and support on software quality issues</li>
            <li>Study and knowledge appropriation of modem operations via serial port</li>
            <li>Introduction of Rust for critical feature software, team training and support</li>
            <li>Creation of Rust firmware interacting with the modem via serial port</li>
            <li>Project presentation to various teams and managers</li>
          </ul>
          <p>
            Within the team, what I actively participated in:
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>Creation of an embedded Linux distribution specific to AO3 hardware with Yocto</li>
            <li>Participation in the elaboration of specifications included in the call for tender</li>
            <li>Backlog elaboration</li>
            <li>Development of the software in Java and Rust governing the device</li>
          </ul>
        
      {/snippet}
    </Experience>
    <Experience
      name="Freelance Lead Tech"
      employeur="Facildata"
      duree="01/2024 - 04/2024"
      themes={[
        'Golang',
        'Rust',
        'Typescript',
        'SvelteJS',
        'Playwright',
        'Nix',
        'Docker',
        'Linux',
        'Postgres',
        'MQTT',
        "Tests d'intégration, BDD, TDD, Architecture Hexagonale",
        'Gitlab, Gitlab CI',
        'Github, Github Actions'
      ]}>
      {#snippet frenchContent()}
          
          <p>
            Facildata est une startup bordelaise visant à simplifier la
            maintenance d'équipements, en obtenant grâce à un QR Code,
            l'intégralité des maintenances effectuées sur ce dernier.
          </p>
          <p>
            J'ai effectué, au rythme de quelques heures par semaine en Freelance,
            du conseil et du développement sur le projet, afin de poser des bases
            de développement saines pour une reprise des développements en
            interne. La mission a duré 5 mois.
          </p>
          <ul class=" list-disc list-inside space-y-1">
            <li>
              Réalisation d'un audit sur le code existant suite à des
              problématiques de maintenabilité
            </li>
            <li>Prise en charge de la refonte logicielle</li>
            <ul class=" list-disc list-inside ml-4">
              <li>
                Choix des technologies les plus adaptées à une reprise du logiciel
                par des personnes en alternance, modularité pour une évolution
                future du logiciel
              </li>
              <li>
                Définition des besoins et des spécifications métier, établissement
                d'un backlog par priorité
              </li>
              <li>
                Création d'une architecture logicielle en monorepo, hexagonale,
                testée de bout en bout
              </li>
            </ul>
            <li>
              Formation au développement Rust, Go, SvelteKit et Typescript, aux
              pratiques de code propre du développeur en alternance m'accompagnant
            </li>
            <li>Réalisation de tests techniques</li>
            <li>
              Établissement de pipelines d'intégration et de déploiement continu
            </li>
            <li>
              Mise en place d'une organisation agile en Kanban, établissement d'un
              vocabulaire commun où le métier peut directement intervenir et
              comprendre les tests
            </li>
          </ul>
        
          {/snippet}
      {#snippet englishContent()}
          
          <p>
            I created the foundations for the software overhaul, where I
            elaborated and designed the application's business domain. I
            established the foundations using Hexagonal Architecture with Go in a
            TDD approach, with automated integration tests, with CI/CD pipelines
            on GitHub Actions.
          </p>
          <p>I also trained the junior developers in craft practices.</p>
        
          {/snippet}
    </Experience>
    <Experience
      name="Senior Software Engineer"
      employeur="Scalingo"
      duree="01/2023 - 06/2024"
      themes={[
        'Golang',
        'Vue',
        'Typescript',
        "Tests d'integration",
        'TDD',
        'Docker',
        'Linux',
        'Postgres',
        'Git',
        'Github Actions',
        'Agile Kanban',
        'Notion'
      ]}>
      {#snippet frenchContent()}
          
          <p>
            Scalingo est un hébergeur Français souverain, qui propose une solution
            orientée autour de l'expérience des développeurs. Je les ai rejoint en
            tant qu'Ingénieur Logiciel Fullstack Senior pendant 1 an et 5 mois.
          </p>

          <ul class="list-inside list-disc space-y-1">
            <li>Organisation du backlog et des équipes</li>
            <ul class="ml-8 list-disc">
              <li>Elaboration de specifications métiers</li>
              <li>Etablissement du Kanban dans les équipes</li>
              <li>
                Développement de procédés afin de fluidifier les échanges
                asynchrones dans l'équipe
              </li>
            </ul>
            <li>
              Prise en charge de projets de développement par petites équipes
            </li>
            <ul class="ml-8 list-disc">
              <li>
                Fenêtres de maintenance automatiques pour les maintenances de base
                de données des utilisateurs
              </li>
              <li>
                Correction d'une faille de sécurité potentielle sur les review
                apps des utilisateurs
              </li>
            </ul>
            <li>Développements au sein de l'équipe</li>
            <ul class="ml-8 list-disc">
              <li>
                Pris part au développement de multiples fonctionnalités en binôme
              </li>
              <li>Correction de bugs et maintenance de la plateforme</li>
              <ul class="ml-4 list-disc">
                <li>Dépréciations de versions de bases de données</li>
                <li>
                  Conception et procédures de migration de bases de données avec
                  le moins d'impact possible pour les utilisateurs
                </li>
              </ul>
              <li>Documentation sur le site public de Scalingo</li>
            </ul>
            <li>
              Organisation de meetups internes, centrés autour de l'échange et de
              l'humain
            </li>
            <li>
              Support en contact direct avec les utilisateurs de la plateforme
            </li>
            <ul class="ml-8 list-disc">
              <li>Prise en charge des questions et problèmes des utilisateurs</li>
              <li>
                Investigation et correction de problèmes sur l'infrastructure de
                Scalingo
              </li>
            </ul>
            <li>
              Pratique et sensibilisation autour de principes d'artisanat logiciel
            </li>
            <ul class="ml-8 list-disc">
              <li>Développement en TDD et BDD</li>
              <li>
                Sensibilisation autour du clean code et des tests au sein des
                équipes
              </li>
              <li>
                Réalisation de tests d'intégration pour la migration de versions
                de bases de données Postgres des utilisateurs
              </li>
            </ul>
          </ul>
        
          {/snippet}
      {#snippet englishContent()}
          
          <p>
            I participated in the application development of microservices, in the
            implementation and discovery of craft practices: TDD, BDD, and
            integration testing. I also contributed to the organization of
            development teams with a Kanban-based approach and specifications.
          </p>
          <p>
            I also provided Level 2 and 3 support, and worked on the
            infrastructure to investigate and resolve user issues.
          </p>
        
          {/snippet}
    </Experience>

    <Experience
      name="Software Engineer"
      employeur="Malt"
      duree="07/2022 - 10/2022"
      themes={[
        'Java',
        'Spring Boot',
        'Vue JS',
        'Kotlin',
        'Cypress',
        'Gitlab CI'
      ]}>
      {#snippet frenchContent()}
          
          <p>
            Malt est une plateforme française visant à faciliter le lien entre les
            freelances et les clients finaux. J'ai rejoint l'équipe Finance afin
            de contribuer aux développements front et back pendant 3 mois.
          </p>

          <ul class=" list-disc list-inside">
            <li>
              Pris part aux développements en sein de l'équipe sur des
              fonctionnalités mineures, dans le cadre de l'onboarding
            </li>
            <li>
              Mise en place de tests d'intégration afin de sécuriser des parcours
              utilisateur
            </li>
          </ul>
        
          {/snippet}
      {#snippet englishContent()}
          
          <p>
            I took part in the development efforts within the Finance team, where
            I implemented integration testing.
          </p>
        
          {/snippet}
    </Experience>
    <Experience
      name={$t('developpeur-full-stack')}
      employeur="SNCF Connect & Tech"
      duree="09/2021 - 07/2022"
      themes={[
        'Kotlin',
        'Java',
        'Spring Boot',
        'AWS',
        'REST',
        'Redis',
        'Gitlab CI',
        'Kanban'
      ]}>
      {#snippet frenchContent()}
          
          <p>
            SNCF Connect & Tech est le domaine informatique de la SNCF, visant à
            faciliter l'intéraction des françaises et français avec la société de
            transports. J'ai pris part aux développements dans l'équipe en charge
            de CMI : le Calculateur Multimodal d'Itinéraires, qui se charge de
            fournir les meilleurs itinéraires possibles lorsqu'un utilisateur
            cherche à aller d'un point A à un point B. L'équipe est composée de 7
            développeurs•euses, 1 PO et 1 SM, et fonctionne en Kanban. La mission
            a duré 11 mois.
          </p>

          <ul class="list-inside list-disc">
            <li>Refonte de l'architecture backend</li>
            <li>
              Développements et maintenances autour du logiciel, de concert avec
              le PO
            </li>
            <li>
              Participation et présentation de projets lors de hackathons internes
            </li>
          </ul>
        
          {/snippet}
      {#snippet englishContent()}
          
          <p>
            I was part of the team responsible for the Calculateur Multi-modal
            d’Itinéraires. There, I contributed to the elaboration of the product
            backlog, while maintaining it: refactoring, developing new features.
          </p>
        
          {/snippet}
    </Experience>
    <Experience
      name={$t('developpeur-full-stack')}
      employeur="Dalkia"
      duree="11/2018 - 09/2021"
      themes={[
        'Java 11',
        'Spring Boot',
        'Typescript',
        'Angular',
        'Storybook',
        'Postgres',
        'AWS',
        'Architecture Hexagonale, TDD, Cucumber'
      ]}>
      {#snippet frenchContent()}
          
          <p>
            Dalkia est une entreprise filiale d'EDF, spécialisée dans les services
            énergétiques. J'ai rejoint l'équipe Alpha au sein des Ateliers
            Numériques fonctionnant en Scrum pendant 3 ans. La mission s'est
            effectué pour La Combe Du Lion Vert, après une formation d'un mois
            autour du Software Craft.
          </p>
          <ul class="list-disc ml-4 space-y-1">
            <li>
              Implication dans la rédaction du backlog avec un échange constant
              avec le PO
            </li>
            <li>
              Contribution à l'aspect Devops de nos logiciels, de concert avec les
              Administrateur•ices Système
            </li>
            <li>
              Organisation d'évènements internes à La Combe Du Lion Vert dans un
              but pédagogique d'artisanat logiciel
            </li>
            <li>
              Mise en place d'un environnement de machines sous Ubuntu afin de
              fluidifier les développements des équipes des Ateliers Numériques
            </li>
            <li>
              Implication dès le début du projet dans une application de
              référentiel métier de Dalkia
            </li>
            <ul class="list-disc ml-4">
              <li>
                Source de vérité pour les autres applications du SI Dalkia,
                activement utilisée par une trentaine de modélisateur•ices du SI
                Dalkia
              </li>

              <li>Pair programming</li>
              <li>TDD</li>
              <li>BDD</li>
              <li>Organisation avec le Scrum Master d'ateliers utilisateurs</li>
              <li>
                Création d'un format de rétrospective fluide utilisé par
                l'ensemble des Ateliers Numériques
              </li>
            </ul>
            <li>
              Création d'une application gérant les primes des technicien•nes.
            </li>
            <ul class="list-disc ml-4">
              <li>
                Pair programming, TDD, BDD et Architecture Hexagonale, Cucumber
              </li>
            </ul>
          </ul>
        
          {/snippet}
      {#snippet englishContent()}
          
          <p>
            As part of a 5-person team following Scrum methodologies, I joined
            from the beginning in the development of a business repository
            application for Dalkia, SEE. Later on, I was involved from the initial
            specifications in the creation of an application managing technician
            bonuses at Dalkia, this time designed with a hexagonal architecture.
          </p>

          <p>
            For both of these projects, I contributed to the implementation of
            craft practices within the teams, such as TDD, pair programming, and
            focusing on the application's business domain. I also worked on the
            DevOps pipelines for the applications.
          </p>
        
          {/snippet}
    </Experience>
    <Experience
      name={$t('developpeur-full-stack')}
      employeur="Allianz"
      duree="05/2018 - 09/2018"
      themes={['Java', 'Spring Boot', 'React']}>
      {#snippet frenchContent()}
          
          <p>
            J'ai participé à la mise en place de solutions internes pour le
            département 2AV: Aide à la Vente. Dans un cadre agile, j'ai réalisé
            des outils numériques aidant le département 2AV avec Spring Web et
            React, et mis en place les fondations pour les tests d'integration de
            plusieurs projets.
          </p>
        
          {/snippet}
      {#snippet englishContent()}
          
          <p>
            I participated in the implementation of internal solutions for the 2AV
            department: Sales Support. Within an agile framework, I developed
            digital tools to assist the 2AV department using Spring Web and React,
            and laid the foundations for integration testing across multiple
            projects.
          </p>
        
          {/snippet}
    </Experience>
    <Experience
      name={$t('developpeur-back-end')}
      employeur="Peugeot PSA"
      duree="11/2017 - 05/2018"
      themes={['Java', 'Kafka', 'Spring Boot', 'Cassandra', 'Apache Flink']}>
      {#snippet frenchContent()}
          
          <p>
            J'ai développé un outil statistique avec Spring Boot détectant les
            déconnexions de voitures à partir d’une source de messages Kafka, et
            ai migré un broker de messages single-node vers un cluster.
          </p>
          <p>
            J'ai pris part à la conception d'un protocole de transmissions de
            messages pour les véhicules connectés, et en ai créé un prototype
            assurant la transmission des données des périphériques embarqués dans
            les véhicules Peugeot.
          </p>
        
          {/snippet}
          {#snippet englishContent()}
          
          <p>
            I developed a statistical tool with Spring Boot that detects vehicle
            disconnections from a Kafka message source, and migrated a single-node
            message broker to a cluster. I participated in the design and created
            a prototype of a message transmission protocol for connected vehicles,
            ensuring the transmission of data from embedded devices in Peugeot
            vehicles.
          </p>
        
          {/snippet}
    </Experience>
    <Experience
      name={$t('developpeur-back-end')}
      employeur="DG2R"
      duree="03/2017 - 08/2017"
      themes={[
        'Arduino, C',
        'Linux',
        'Raspberry Pi',
        'Informatique embarquée',
        'Python',
        'Micropython',
        'Postgres',
        'Docker',
        'React'
      ]}>
      {#snippet frenchContent()}
          
          <p>
            DG2R est un intégrateur d'automates industriels basés sur Arduino. Je
            l'ai rejoint pendant 6 mois dans le cadre de mon projet de fin
            d'études. Mes réalisations ont été faites seul.
          </p>
          <ul class="list-disc ml-4 space-y-1">
            <li>
              Mise en place d'une infrastructure logicielle interne à DG2R
              <ul class="list-disc ml-8">
                <li>
                  Mise en place d'un Gitlab et Nextcloud interne afin de faciliter
                  la collaboration des employés de DG2R
                </li>
              </ul>
            </li>
            <li>
              Création d'interfaces de contrôle de température au sein des locaux
              de la Mairie de Boulogne Billancourt
              <ul class="list-disc ml-8">
                <li>
                  Conception d'interfaces sur une interface tactile embarquée
                  Linux
                </li>
                <li>
                  Travail avec les employés de la mairie afin de connaître leurs
                  besoins
                </li>
                <li>
                  Intégration avec le système de contrôle existant Continuum
                </li>
              </ul>
            </li>
            <li>
              Développement du site internet marchand de DG2R
              <ul class="list-disc ml-8">
                <li>
                  Conception d'un site marchand avec Python, Django et React,
                  mettant en avant les produits vendus par DG2R
                </li>
                <li>
                  Mise en place d'une pipeline de déploiement continue sur un
                  Gitlab
                </li>
              </ul>
            </li>
          </ul>
        
          {/snippet}
          {#snippet englishContent()}
            <span></span>
          {/snippet}
    </Experience>
  </div>
</div>
