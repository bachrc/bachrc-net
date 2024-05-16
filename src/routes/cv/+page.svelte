<script lang="ts">
  import Experience from '$lib/components/Experience.svelte';
  import ThemesList from '$lib/components/ThemesList.svelte';
  import photoAvif from '$lib/assets/photo.avif';
  import photoWebp from '$lib/assets/photo.webp';
  import photoPng from '$lib/assets/photo.png';
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
        ✉️ <a
          href="mailto:contact@bachrc.net"
          class="underline underline-offset-2 text-blue-900"
          >contact@bachrc.net</a>
      </li>
      <li>
        🌐 <a
          href="https://bachrc.net"
          class="underline underline-offset-2 text-blue-900"
          >https://bachrc.net</a>
      </li>
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
            'Craft'
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
            'Nix',
            'Git',
            'Gitlab CI',
            'Github Actions',
            'Linux',
            'OpenAPI'
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

  <div class="flex flex-col w-11/12 sm:w-3/4 p-4 self-center gap-4">
    <h1 class="text-xl">{$t('experiences')}</h1>
    <Experience
      titre="Senior Software Engineer"
      employeur="Scalingo"
      duree="01/2023 - {$t('aujourdhui')}"
      themes={['Golang', 'Vue', 'Docker', 'Linux']}>
      <svelte:fragment slot="frenchContent">
        <p>
          J'ai participé au développement applicatif des micro-services, à la
          mise en place ainsi qu'à la découverte de pratiques du craft: TDD, BDD
          et des tests d'intégration. J'ai mis en place le système de
          spécifications, et ai contribué à la bonne organisation des équipes de
          développement, organisation qui s'est faite en Kanban.
        </p>
        <p>
          J'ai également effectué du support Niveau 2 et 3, et suis intervenu
          sur l'infrastructure pour investiguer, et résoudre les problèmes des
          utilisateurs.
        </p>
      </svelte:fragment>
      <svelte:fragment slot="englishContent">
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
      </svelte:fragment>
    </Experience>
    <Experience
      titre="Freelance Lead Tech"
      employeur="Facildata"
      duree="01/2024 - 04/2024"
      themes={['Golang', 'Svelte', 'Rust', 'Nix', 'Github Actions']}>
      <svelte:fragment slot="frenchContent">
        <p>
          J'ai mis en place les fondations de la refonte du logiciel, et y ai
          élaboré et conçu le métier de l'application. J'ai réalisé les
          fondations en Architecture Hexagonale avec Go en TDD, avec tests
          d'intégration automatisés, pipelines CI/CD sur Github Actions.
        </p>
        <p>
          J'y ai également formé les jeunes développeur•euses aux pratiques
          craft.
        </p>
      </svelte:fragment>
      <svelte:fragment slot="englishContent">
        <p>
          I created the foundations for the software overhaul, where I
          elaborated and designed the application's business domain. I
          established the foundations using Hexagonal Architecture with Go in a
          TDD approach, with automated integration tests, with CI/CD pipelines
          on GitHub Actions.
        </p>
        <p>I also trained the junior developers in craft practices.</p>
      </svelte:fragment>
    </Experience>
    <Experience
      titre="Software Engineer"
      employeur="Malt"
      duree="07/2022 - 10/2022"
      themes={['Java', 'Kotlin', 'Spring', 'Vue']}>
      <svelte:fragment slot="frenchContent">
        <p>
          J'ai pris part aux développements au sein de l'équipe Finances, et y
          ai mis en place des tests d'integration.
        </p>
      </svelte:fragment>
      <svelte:fragment slot="englishContent">
        <p>
          I took part in the development efforts within the Finance team, where
          I implemented integration testing.
        </p>
      </svelte:fragment>
    </Experience>
    <Experience
      titre={$t('developpeur-full-stack')}
      employeur="SNCF Connect & Tech"
      duree="09/2021 - 07/2022"
      themes={['Java 17', 'Angular', 'Spring', 'Kotlin', 'Redis']}>
      <svelte:fragment slot="frenchContent">
        <p>
          J'ai contribué au sein de l’équipe en charge du Calculateur
          Multi-modal d’Itinéraires. J'ai participé à l'élaboration du backlog
          du produit, tout en l'entretenant : refacto, développement de
          nouvelles fonctionnalités.
        </p>
      </svelte:fragment>
      <svelte:fragment slot="englishContent">
        <p>
          I was part of the team responsible for the Calculateur Multi-modal
          d’Itinéraires. There, I contributed to the elaboration of the product
          backlog, while maintaining it: refactoring, developing new features.
        </p>
      </svelte:fragment>
    </Experience>
    <Experience
      titre={$t('developpeur-full-stack')}
      employeur="Dalkia"
      duree="11/2018 - 09/2021"
      themes={[
        'Java 11',
        'Angular',
        'Spring Boot',
        'Storybook',
        'Postgres',
        'AWS'
      ]}>
      <svelte:fragment slot="frenchContent">
        <p>
          Au sein d'une équipe de 5 personnes suivant les méthodes Scrum, j'ai
          contribué dès les débuts à l'élaboration d'une application du
          référentiel métier de Dalkia, SEE. Un peu plus tard, j'ai participé
          dès les premières spécifications à la réalisation d'une application
          gérant les primes des techniciens Dalkia, cette fois-ci conçue avec
          une architecture hexagonale.
        </p>
        <p>
          Ces deux projets m'ont permis de mettre en place des pratiques craft
          au sein des équipes, telles que du TDD, du pair programming, et de me
          concentrer autour du métier de l'application. Je suis également
          intervenu sur les pipelines DevOps des applications.
        </p>
      </svelte:fragment>
      <svelte:fragment slot="englishContent">
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
      </svelte:fragment>
    </Experience>
    <Experience
      titre={$t('developpeur-full-stack')}
      employeur="Allianz"
      duree="05/2018 - 09/2018"
      themes={['Java', 'Spring Boot', 'React']}>
      <svelte:fragment slot="frenchContent">
        <p>
          J'ai participé à la mise en place de solutions internes pour le
          département 2AV: Aide à la Vente. Dans un cadre agile, j'ai réalisé
          des outils numériques aidant le département 2AV avec Spring Web et
          React, et mis en place les fondations pour les tests d'integration de
          plusieurs projets.
        </p>
      </svelte:fragment>
      <svelte:fragment slot="englishContent">
        <p>
          I participated in the implementation of internal solutions for the 2AV
          department: Sales Support. Within an agile framework, I developed
          digital tools to assist the 2AV department using Spring Web and React,
          and laid the foundations for integration testing across multiple
          projects.
        </p>
      </svelte:fragment>
    </Experience>
    <Experience
      titre={$t('developpeur-back-end')}
      employeur="Peugeot PSA"
      duree="12/2017 - 05/2018"
      themes={['Java', 'Kafka', 'Spring Boot', 'Cassandra', 'Apache Flink']}>
      <svelte:fragment slot="frenchContent">
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
      </svelte:fragment>
      <svelte:fragment slot="englishContent">
        <p>
          I developed a statistical tool with Spring Boot that detects vehicle
          disconnections from a Kafka message source, and migrated a single-node
          message broker to a cluster. I participated in the design and created
          a prototype of a message transmission protocol for connected vehicles,
          ensuring the transmission of data from embedded devices in Peugeot
          vehicles.
        </p>
      </svelte:fragment>
    </Experience>
  </div>
</div>
