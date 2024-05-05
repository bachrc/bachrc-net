<script>
  import LocalisedContent from '$lib/components/LocalisedContent.svelte';
  import { t } from 'svelte-i18n';
</script>

<svelte:head>
  <title>bachrc - {$t('a-propos')}</title>
</svelte:head>

<div
  class="container mx-auto leading-8 bg-indigo-100/50 rounded-xl text-lg p-4 flex flex-col gap-6 text-justify font-serif sm:w-2/3 my-8">
  <LocalisedContent>
    {#snippet frenchContent()}
      <h1 class="text-2xl pb-2 border-b border-b-indigo-300">Qui suis-je ?</h1>
      <p>
        Quelqu'un qui adore créer, et le code en est un fabuleux outil. Je suis
        un développeur touche à tout dit "Full-Stack" depuis 2017. Je suis
        localisé à Strasbourg et effectue mon travail en Freelance.
      </p>

      <h1 class="text-2xl pb-2 border-b border-b-indigo-300">Mes valeurs</h1>
      <p>
        L'artisanat et l'écologie logicielle sont deux valeurs très liées qui me
        tiennent à coeur.
      </p>
      <p>
        Cela passe par l'inclusion, qu'elle soit au sein des équipes de
        développement, mais également pour les personnes qui utilisent
        l'application, en rendant les applications accessibles à toutes et tous.
        Par ailleurs, <em>ce site internet est en cours de conformité RGAA4</em
        >.
      </p>
      <p>
        Je parle également d'écologie logicielle, où pour moi chaque solution et
        organisation doit être réfléchie afin d'optimiser nos ressources. Ainsi,
        afin de les minimiser, il est important de considérer plusieurs facteurs
        :
      </p>
      <ul class="list-disc list-outside pl-4">
        <li>
          Le facteur <em>environnemental</em>, en choisissant une technologie
          peu énergivore et efficiente
        </li>
        <li>
          Le facteur <em>humain</em>, en créant un environnement de travail
          inclusif dans lequel tout un chacun s'épanouit
        </li>
        <li>
          Le facteur de <em>pérennité</em>, en concevant son application afin
          qu'elle réponde à un besoin, qu'elle soit maintenable, testée, et
          évolutive. En s'inspirant notamment des principes du <i>Craft</i>.
        </li>
      </ul>
      <h1 class="text-2xl pb-2 border-b border-b-indigo-300">
        Prenons un café ?
      </h1>
      <p>
        Vous pouvez <a href="/cv">consulter mon CV</a> pour découvrir mes
        compétences et précédentes expériences,
        <a href="https://github.com/bachrc">consulter mon profil Github</a>
        pour y voir quelques expérimentations open-source que j'ai réalisé, et également
        <a href="mailto:contact@bachrc.net">me contacter</a>
        pour boire un café ensemble. J'ai de très bonnes adresses.
      </p>
    {/snippet}
    {#snippet englishContent()}
      <h1 class="text-2xl pb-2 border-b border-b-indigo-300">Who am I?</h1>
      <p>
        Someone who loves to create, and code is a fabulous tool for that. I've
        been a full-stack developer since 2017. I'm based in Strasbourg and work
        as a freelancer.
      </p>

      <h1 class="text-2xl pb-2 border-b border-b-indigo-300">My values</h1>
      <p>
        Crafts•wo•manship and software ecology are two closely linked values
        that are very close to my heart.
      </p>
      <p>
        This means inclusion, not only within the development teams, but also
        for the people who use the applications, by making them accessible to
        anyone. In addition, <em
          >this website is in the process of being RGAA4 compliant</em
        >.
      </p>
      <p>
        I'm also talking about software ecology, where for me every solution and
        organization needs to be thought through to optimize our resources. So,
        in order to minimize them, it's important to consider several factors:
      </p>
      <ul class="list-disc list-outside pl-4">
        <li>
          The <em>environmental</em> factor, by choosing energy-efficient technologies
        </li>
        <li>
          The <em>human</em> factor, by creating an inclusive work environment in
          which everyone can grow and flourish
        </li>
        <li>
          The <em>sustainability</em> factor, by designing the application so
          that it meets a need, is maintainable, testable and scalable. Inspired
          in particular by <i>Craft</i> principles.
        </li>
      </ul>
      <h1 class="text-2xl pb-2 border-b border-b-indigo-300">
        Let's take a coffee?
      </h1>
      <p>
        You can <a href="/cv">check out my CV</a> to find out about my skills
        and previous experience,
        <a href="https://github.com/bachrc">check out my Github profile</a>
        to see some of the open-source experiments I've done, and also
        <a href="mailto:contact@bachrc.net">contact me</a> for a coffee together.
        I know some great places.
      </p>
    {/snippet}
  </LocalisedContent>
</div>
