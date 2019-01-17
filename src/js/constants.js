export const categories = [
  {
    name: 'Blog',
    slug: 'blog',
    num: 1,
  },
  {
    name: 'Copywriting',
    slug: 'copywriting',
    num: 2,
  },
  {
    name: 'Tutorials',
    slug: 'tutorials',
    num: 8,
  },
  {
    name: 'Video-Tutorials',
    slug: 'video-tutorials',
    num: 9,
  },
  {
    name: 'Analysis',
    slug: 'analysis',
    num: 0,
  },
  {
    name: 'Bug-Hunting',
    slug: 'bug-hunting',
    num: 5,
  },
  {
    name: 'Anti-Abuse',
    slug: 'anti-abuse',
    num: 13,
  },
  {
    name: 'Visibility',
    slug: 'visibility',
    num: 10,
  },
  {
    name: 'Suggestions',
    slug: 'suggestions',
    num: 7,
  },
  {
    name: 'Documentation',
    slug: 'documentation',
    num: 4,
  },
  {
    name: 'Development',
    slug: 'development',
    num: 3,
  },
  {
    name: 'Translations',
    slug: 'translations',
    num: 12,
  },
  //   {
  //     name: 'Iamutopian',
  //     slug: 'iamutopian',
  //   },
  {
    name: 'Task-Request',
    slug: 'task-request',
    num: 11,
  },
  {
    name: 'Graphics',
    slug: 'graphics',
    num: 6,
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const questions = {
  blog: [
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'The quality of the post is fantastic.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The post is of decent quality, but there is room for improvement.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer: 'The quality of the post is below average.',
          weight: 0.8,
          pointsLegacy: -14,
        },
        {
          answer: 'The post is hard to read and the content is sometimes hard to understand.',
          weight: 0.55,
          pointsLegacy: -30,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.05,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.9,
          pointsLegacy: -5,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question: 'What is the overall volume of the blog post?',
      answers: [
        {
          answer: 'More than 1,300 words',
          weight: 1.05,
          pointsLegacy: 5,
        },
        {
          answer: '800-1,300 words',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: '500-800 words',
          weight: 0.9,
          pointsLegacy: -8,
        },
        {
          answer: 'Less than 500 words',
          weight: 0.75,
          pointsLegacy: -25,
        },
      ],
    },
    {
      question: 'What is the topic category of this blog post?',
      answers: [
        {
          answer: 'Project introduction or project promotion',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Development log / release notes',
          weight: 0.99,
          pointsLegacy: -1.5,
        },
        {
          answer: "Project's generic news",
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'The topic is barely related to the project.',
          weight: 0.6,
          pointsLegacy: -40,
        },
      ],
    },
    {
      question: 'Is the post a part of a series?',
      answers: [
        {
          answer: 'It is clear that it is a part of an ongoing series of posts.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'It is clear that it is the first post of an upcoming series.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer: 'It is the first post from the author.',
          weight: 0.92,
          pointsLegacy: -8,
        },
        {
          answer: 'The post is not a part of any series.',
          weight: 0.9,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Was relevant quality graphic and video content included in this post?',
      answers: [
        {
          answer:
            'Yes, at least 4 distinguishable instances of graphic or video content were included.',
          weight: 1.01,
          pointsLegacy: 2,
        },
        {
          answer:
            'Yes, between 2 and 3 distinguishable instances of graphic or video content were included.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'A single instance of graphic or video content was included.',
          weight: 0.96,
          pointsLegacy: -6,
        },
        {
          answer: 'No graphic or video content was included or the content was irrelevant.',
          weight: 0.9,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'How familiar is the author with the project discussed in the post?',
      answers: [
        {
          answer: 'It is clear that they are closely familiar with the project and its details.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The author offers some valuable insights about the project.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: 'Most of the blog post contains information gathered from other sources.',
          weight: 0.8,
          pointsLegacy: -10,
        },
        {
          answer: 'The author knows only little or nothing about the project.',
          weight: 0.3,
          pointsLegacy: -40,
        },
      ],
    },
    {
      question:
        'What is the timeframe of the events and announcements discussed in the blog post, and does it include reference to similar projects?',
      answers: [
        {
          answer:
            'Both recent and future events, as well as comparison with similar projects is included.',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            'Events more recent than 2 weeks, or future events related the project are included.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Comparison with similar projects is included.',
          weight: 0.96,
          pointsLegacy: -10,
        },
        {
          answer: 'None of these topics are discussed in the post.',
          weight: 0.92,
          pointsLegacy: -40,
        },
      ],
    },
  ],
  'bug-hunting': [
    {
      question: 'What was the severity level of the bug?',
      answers: [
        {
          answer: 'Critical',
          weight: 1.05,
          pointsLegacy: 10,
        },
        {
          answer: 'Major',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Minor',
          weight: 0.75,
          pointsLegacy: -25,
        },
        {
          answer: 'Negligible',
          weight: 0.6,
          pointsLegacy: -35,
        },
      ],
    },
    {
      question: 'How would you rate the descriptiveness and clarity of the submission post?',
      answers: [
        {
          answer:
            'The title provided sufficient information, and the steps to bug reproduction were clearly described.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'The title was not sufficiently informative, but the steps to bug reproduction were clear.',
          weight: 0.98,
          pointsLegacy: -2.5,
        },
        {
          answer:
            'The title provided sufficient information, but the description of the steps to bug reproduction severely lacked in clarity.',
          weight: 0.96,
          pointsLegacy: -3.5,
        },
        {
          answer:
            'Both the title and content of the submission post were lacking in information, and the steps to bug reproduction were badly explained and, at times, impossible to follow.',
          weight: 0.7,
          pointsLegacy: -5,
        },
      ],
    },
    {
      question:
        'Has the contributor reported the issue to the project owner prior to submitting it to Utopian?',
      answers: [
        {
          answer: 'Yes, it was reported by this contributor and acknowledged by the project owner.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Yes, it was reported by this contributor but has to yet be acknowledged by the project owner.',
          weight: 0.95,
          pointsLegacy: -5,
        },
        {
          answer:
            'No, it was not reported, but an effort to contact the project owner has been made.',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'No, the contributor made no effort to notify the project owner of this issue.',
          weight: 0.7,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question:
        'Has the contributor looked for the possible cause of the issue and/or submitted his own ideas for implementing a fix to this problem?',
      answers: [
        {
          answer: 'The contributor pinpointed the issue and proposed a possible solution.',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            'The contributor pinpointed the cause but hasn’t proposed a fix, or the fix proposed was obviously not suitable.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The contributor made efforts to pinpoint the cause, but without success.',
          weight: 0.95,
          pointsLegacy: -10,
        },
        {
          answer:
            'The contributor made no efforts to pinpoint the cause, or applied incorrect methods in searching for it.',
          weight: 0.8,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.95,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.85,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.5,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.05,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.85,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -20,
        },
      ],
    },
  ],
  analysis: [
    {
      question: 'Were all relevant aspects or metrics related to the objective analyzed?',
      answers: [
        {
          answer: 'All relevant metrics were covered.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Only selected metrics were chosen; including more may have provided additional insights.',
          weight: 0.97,
          pointsLegacy: -4,
        },
        {
          answer: 'Only a single or narrow aspect was chosen.',
          weight: 0.9,
          pointsLegacy: -12,
        },
        {
          answer: 'No metric was chosen.',
          weight: 0.7,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question: 'How would you rate the complexity data extraction for this analysis?',
      answers: [
        {
          answer: 'Gathering the data required complex queries and post-processing.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The method of extracting data was moderately challenging.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer:
            'The data can be directly imported for visualization - no additional data transformation was needed.',
          weight: 0.9,
          pointsLegacy: -11,
        },
        {
          answer: 'No data was extracted.',
          weight: 0.75,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'How would you rate the quality of the visualization of the findings?',
      answers: [
        {
          answer: 'Visualizations presented were superb and beyond expectation.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Appropriate and sufficient visualization were used to present the results.',
          weight: 0.95,
          pointsLegacy: -4,
        },
        {
          answer: 'Visualizations were included, but lacked in quality and/or quantity.',
          weight: 0.85,
          pointsLegacy: -16,
        },
        {
          answer: 'Visualizations included were irrelevant to the objective.',
          weight: 0.7,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question: 'Was the analysis reproducible through the use of the contribution content?',
      answers: [
        {
          answer:
            'All queries or data gathering methods and all data processing scripts were included.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'The core query or data gathering method was included and the data processing steps were described.',
          weight: 0.99,
          pointsLegacy: -1,
        },
        {
          answer: 'Data gathering methods and processing steps were sketched.',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Data gathering methods were not included.',
          weight: 0.9,
          pointsLegacy: -5,
        },
      ],
    },
    {
      question: 'Was it a new and unique analysis?',
      answers: [
        {
          answer: 'Yes, it was a unique analysis.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'It’s similar to another contribution, but covers deeper or additional aspects.',
          weight: 0.95,
          pointsLegacy: -4,
        },
        {
          answer: 'It’s similar to another contribution, but covers a different time period.',
          weight: 0.92,
          pointsLegacy: -6,
        },
        {
          answer: 'It’s a recurring analysis covering too short a time frame (i.e., daily).',
          weight: 0.82,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.95,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.85,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.6,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.87,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.15,
          pointsLegacy: -20,
        },
      ],
    },
  ],
  documentation: [
    {
      question: 'How would you rate the overall quality of the documentation?',
      answers: [
        {
          answer: 'Fantastic quality! It’s very hard to find documentation this good.',
          weight: 1.05,
          pointsLegacy: 0,
        },
        {
          answer: 'Very high quality.',
          weight: 1,
          pointsLegacy: -5,
        },
        {
          answer: 'Average quality - could be improved in many ways.',
          weight: 0.85,
          pointsLegacy: -20,
        },
        {
          answer: 'Very low quality.',
          weight: 0.3,
          pointsLegacy: -27.5,
        },
      ],
    },
    {
      question:
        'How comprehensive was the documentation (how many features were documented, contribution volume, etc.)?',
      answers: [
        {
          answer: 'A significant portion of the project was documented.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Numerous features or one major feature were documented.',
          weight: 0.97,
          pointsLegacy: -5,
        },
        {
          answer: 'A small feature was documented in detail.',
          weight: 0.85,
          pointsLegacy: -15,
        },
        {
          answer: 'The volume or detail of the documentation were insufficient.',
          weight: 0.4,
          pointsLegacy: -25,
        },
      ],
    },
    {
      question:
        'How would you rate the overall significance of this particular feature/file documentation to the project?',
      answers: [
        {
          answer: 'Very important, the project is significantly easier to use with it.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Important, but not critical to use or application of the project.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: 'It has some potential uses as reference.',
          weight: 0.9,
          pointsLegacy: -9,
        },
        {
          answer: 'It had no obvious applications or uses.',
          weight: 0.5,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'Is the documentation developed for the internal staff only, or does it add value to the open source community as a whole?',
      answers: [
        {
          answer:
            'It is meant to be used also by open source community members not associated with the project.',
          weight: 1,
          pointsLegacy: -0,
        },
        {
          answer:
            'It is mainly aimed at open source community members that contribute to this particular project.',
          weight: 0.99,
          pointsLegacy: -0.5,
        },
        {
          answer:
            'It is intended for internal staff use, but the community can also benefit from this content.',
          weight: 0.98,
          pointsLegacy: -1.5,
        },
        {
          answer:
            'It is clearly meant only for the internal staff of the project and hold no value to the open source community.',
          weight: 0.96,
          pointsLegacy: -2.5,
        },
      ],
    },
    {
      question:
        'Does the author of the documentation understand the project and its needs in detail?',
      answers: [
        {
          answer: 'Yes. The author is clearly very involved in the project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The author has good understanding of the project and its needs.',
          weight: 0.99,
          pointsLegacy: -1.5,
        },
        {
          answer: 'The author understands how the project works.',
          weight: 0.95,
          pointsLegacy: -6,
        },
        {
          answer: 'The author has no understanding of the project.',
          weight: 0.85,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.6,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.87,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -20,
        },
      ],
    },
  ],
  copywriting: [
    {
      question: 'What is the volume of the work submitted?',
      answers: [
        {
          answer: 'Large (at least 1,000 words in total)',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Medium (at least 400 words in total)',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'Short (at least 200 words in total)',
          weight: 0.85,
          pointsLegacy: -15,
        },
        {
          answer: 'Very Short (less than 200 words in total)',
          weight: 0.7,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question: 'How would you rate the grammar and style of the content?',
      answers: [
        {
          answer: 'Polished and well-written',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Good, but has room for improvement',
          weight: 0.92,
          pointsLegacy: -6,
        },
        {
          answer: 'Has several errors that need to be corrected',
          weight: 0.85,
          pointsLegacy: -10,
        },
        {
          answer: 'It is of low quality',
          weight: 0.4,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: "How relevant is the content to the project's needs?",
      answers: [
        {
          answer: 'Highly relevant and valuable',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Relevant but offers little unique value',
          weight: 0.95,
          pointsLegacy: -3,
        },
        {
          answer: 'Somewhat relevant',
          weight: 0.7,
          pointsLegacy: -5,
        },
        {
          answer: 'Does not adequately meet the project’s needs',
          weight: 0.3,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Overall, how readable or comprehensible is the content?',
      answers: [
        {
          answer: 'It reads well and is easy to comprehend',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'It is understandable, but it could be improved',
          weight: 0.97,
          pointsLegacy: -2,
        },
        {
          answer: 'Some parts are hard to comprehend',
          weight: 0.9,
          pointsLegacy: -6,
        },
        {
          answer: 'A lot of it is hard to understand',
          weight: 0.5,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Did the content fulfill the specific needs presented by the project owner?',
      answers: [
        {
          answer: 'Yes, the content exceeded all specified requirements',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer: 'Yes, all the requirements were fulfilled',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Some of the less important requirements were left out',
          weight: 0.9,
          pointsLegacy: -8,
        },
        {
          answer: 'Not all important requirements were addressed',
          weight: 0.8,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.6,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.87,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -20,
        },
      ],
    },
  ],
  visibility: [
    {
      question:
        'Does the post include sufficient information and detailed description of the work done?',
      answers: [
        {
          answer:
            'The post includes detailed reports including a downloadable activity report as well as bidding strategy, and logical reasoning behind campaign planning and execution.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'The post includes some details on the campaign progress and results, but could offer additional information.',
          weight: 0.95,
          pointsLegacy: -5,
        },
        {
          answer: 'The post lacks sufficient information to fully understand the work performed.',
          weight: 0.85,
          pointsLegacy: -9.5,
        },
        {
          answer:
            'The post includes no proof of authorship and/or lacks campaign result details completely.',
          weight: 0.7,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Is the audience targeting and segmentation relevant to the project promoted?',
      answers: [
        {
          answer: 'Yes, the target audience is well defined and relevant to the project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The target audience is relevant, but too broad / narrow.',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'The target audience is not relevant to the project promoted.',
          weight: 0.8,
          pointsLegacy: -14,
        },
        {
          answer: 'No targeting information was provided.',
          weight: 0.7,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'Is the message used in the visibility campaign relevant and concise?',
      answers: [
        {
          answer: 'Yes, the call to action is very clear and ad copy is accurate.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The message is included, but could be better crafted.',
          weight: 0.95,
          pointsLegacy: -10,
        },
        {
          answer: 'The message is inaccurate / unsuitable to the target audience.',
          weight: 0.85,
          pointsLegacy: -14,
        },
        {
          answer:
            'The message is completely irrelevant and / or in a foreign language with no translation provided.',
          weight: 0.5,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'What was the overall performance of the campaign described?',
      answers: [
        {
          answer:
            'The project received significant visibility (over 10,000 users reach) and conversion rate (over 2 percent on average).',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'The project received some visibility and traction (under 10,000 reach, conversion rate of 0-2 percent).',
          weight: 0.9,
          pointsLegacy: -15,
        },
        {
          answer:
            'The project received little visibility and traction due to badly defined campaign goals by the project owner.',
          weight: 0.7,
          pointsLegacy: -19.5,
        },
        {
          answer: 'The project did not benefit from this contribution.',
          weight: 0,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question:
        'Does the submission offer added-value / educational content (such as tips, insights, etc.)?',
      answers: [
        {
          answer: 'Yes, people should learn from this post!',
          weight: 1.02,
          pointsLegacy: 0,
        },
        {
          answer: 'Some added-value content is included.',
          weight: 1,
          pointsLegacy: -5,
        },
        {
          answer: 'There’s very little one can learn from this post.',
          weight: 0.95,
          pointsLegacy: -7.5,
        },
        {
          answer: 'This post includes misleading information.',
          weight: 0.8,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.6,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.87,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -20,
        },
      ],
    },
  ],
  tutorials: [
    {
      question: 'How many substantial concepts does this tutorial address?',
      answers: [
        {
          answer: '4-5 substantial concepts covered in the tutorial.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: '2-3 substantial concepts covered in the tutorial.',
          weight: 0.96,
          pointsLegacy: -5,
        },
        {
          answer: '1 substantial concept covered in the tutorial.',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'More than 5 substantial concepts covered in the tutorial.',
          weight: 0.85,
          pointsLegacy: -15,
        },
        {
          answer: 'No substantial concepts covered.',
          weight: 0.75,
          pointsLegacy: -30,
        },
      ],
    },
    {
      question: 'Does the title and the outline of the tutorial properly reflect the content?',
      answers: [
        {
          answer: 'Yes, it is very clear.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'To some extent.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer:
            'The title is somewhat misleading and/or the outline is not detailed or informative enough.',
          weight: 0.93,
          pointsLegacy: -7,
        },
        {
          answer: 'Title and outline are of little or no relevance to the content of the tutorial.',
          weight: 0.7,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'Did the contributor provide supplementary resources, such as code and sample files in the contribution post or a linked GitHub repository?',
      answers: [
        {
          answer:
            'Yes, exceptional supplementary resources are provided including a relevant github repo/gist.',
          weight: 1.01,
          pointsLegacy: 0,
        },
        {
          answer: 'Supplementary resources provided are of high relevance.',
          weight: 1,
          pointsLegacy: -3,
        },
        {
          answer: 'Contributor provides minimal supplementary resources.',
          weight: 0.95,
          pointsLegacy: -7,
        },
        {
          answer: 'No supplementary resources were provided.',
          weight: 0.9,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Is the tutorial part of a series?',
      answers: [
        {
          answer: 'Yes.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Yes, but it is the first entry in the series.',
          weight: 0.99,
          pointsLegacy: -3,
        },
        {
          answer: 'Yes, but it is irrelevant with the series.',
          weight: 0.95,
          pointsLegacy: -10,
        },
        {
          answer: 'No, but it works just fine as a stand-alone tutorial.',
          weight: 0.99,
          pointsLegacy: -3,
        },
        {
          answer: 'No, though it clearly should be.',
          weight: 0.95,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Does the tutorial contain sufficient explanatory visuals?',
      answers: [
        {
          answer: 'Yes, the visual components of the post were adequate in quality and quantity.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The volume of visual components included was unnecessarily large.',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'The post lacked sufficient visualization to easily learn from the content.',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'Visual components provided are of low quality, or not descriptive enough.',
          weight: 0.8,
          pointsLegacy: -10,
        },
        {
          answer: 'No visualization was presented in this contribution.',
          weight: 0.8,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'How unique and/or innovative are the concepts covered in the tutorial?',
      answers: [
        {
          answer: 'This was the first time I read about the concepts covered.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The concepts covered were innovative and offer some usefulness.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer:
            'Similar concepts and ideas are available elsewhere, but this one was of higher quality.',
          weight: 0.9,
          pointsLegacy: -5,
        },
        {
          answer: 'Similar or superior tutorials can be found online with great ease.',
          weight: 0.7,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.6,
          pointsLegacy: -20,
        },
        {
          answer: 'Unintelligible',
          weight: 0.3,
          pointsLegacy: -35,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.87,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -40,
        },
      ],
    },
  ],
  graphics: [
    {
      question:
        'Did the designer include a selection of distinctive designs or variations for the project owner to choose from?',
      answers: [
        {
          answer: 'More than 3 distinctive, relatively complex designs were provided.',
          weight: 1.05,
          pointsLegacy: 7,
        },
        {
          answer: 'Between 2 and 3; the designs were complex and took a fair amount of work.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Only one distinctive design was provided among the provided designs.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer: 'Only single design was provided.',
          weight: 0.95,
          pointsLegacy: -6,
        },
        {
          answer:
            'The number of design variations provided was lower than the number requested by the project owner and/or the apparent work invested was negligible.',
          weight: 0.8,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'Does the contribution include files for immediate use in all requested formats?',
      answers: [
        {
          answer: 'Yes, all requested file formats were provided with a clear files structure.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Most requested file formats requested by project owner were provided, but not all.',
          weight: 0.97,
          pointsLegacy: -4,
        },
        {
          answer:
            'No, submitted files were not ready for immediate use and require editing or adjustments.',
          weight: 0.85,
          pointsLegacy: -16,
        },
        {
          answer: 'No downloadable files were provided.',
          weight: 0.5,
          pointsLegacy: -60,
        },
      ],
    },
    {
      question: 'What is the technical quality of the contribution?',
      answers: [
        {
          answer: 'Excellent, no mistakes within the design.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Very good, open for improvements.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer: 'Good but the design has some serious flaws that need to be corrected.',
          weight: 0.85,
          pointsLegacy: -26,
        },
        {
          answer: 'Bad. The design does not follow graphics standard and is barely usable.',
          weight: 0.4,
          pointsLegacy: -65,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Excellent. The post contains no or very few minor mistakes.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Good. The post contains some minor mistakes in formatting or language usage that worsen the readability of the post.',
          weight: 0.97,
          pointsLegacy: -4,
        },
        {
          answer: 'Average. The post contains mistakes that should be corrected.',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'Low Quality. The post contains many mistakes in writing.',
          weight: 0.7,
          pointsLegacy: -28,
        },
      ],
    },
    {
      question: 'What is the visibility impact on OS community and the popularity of the project?',
      answers: [
        {
          answer:
            "The project is significantly important for the OS community. The number of the repository's stars and forks is greater than 5000.",
          weight: 1.08,
          pointsLegacy: 10,
        },
        {
          answer:
            "The project has established a large community of contributors and users. The number of the repository's stars and forks is greater than 1000.",
          weight: 1.02,
          pointsLegacy: 5,
        },
        {
          answer:
            "The project is know in the community and had many contributors and users. The number of the repository's stars and forks is greater than 500 or the project has been actively developed for at least one year.",
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            "The project is known among people but is not so popular. The number of the repository's stars and forks is greater than 100 or the project has been actively developed for at least 6 months.",
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer:
            "The project has some contributors and users. It is known among a smaller group of people. The number of the repository's stars and forks is greater than 20.",
          weight: 0.91,
          pointsLegacy: -8,
        },
        {
          answer:
            "The project is new or hasn't been popular. The number of the repository's stars and forks is less than 20.",
          weight: 0.85,
          pointsLegacy: -12,
        },
      ],
    },
    {
      question: 'How would you describe the presentation of the graphics contribution in the post?',
      answers: [
        {
          answer:
            'Excellent. The graphics contribution is presented in an appealing and, if possible, unique way in real use-case scenarios if applicable.',
          weight: 1,
          pointsLegacy: 3,
        },
        {
          answer:
            'Good. The presentation is visually appealing but does not offer details to learn about the choices made during the creation process and/or contains some minor issues.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer:
            "Average. The presentation includes the graphics but lacks author's originality and does not offer details about the graphics and/or it contains issues that should be corrected.",
          weight: 0.9,
          pointsLegacy: -12,
        },
        {
          answer:
            'Low Quality. There is no visual presentation or the one provided adds no to little value to the overall presentation of the graphics.',
          weight: 0.7,
          pointsLegacy: -32,
        },
      ],
    },
    {
      question: 'Uniqueness and creativity of the graphics contribution?',
      answers: [
        {
          answer: 'It is unique, well-thought and suits the project well.',
          weight: 1,
          pointsLegacy: 2,
        },
        {
          answer: "It is generic, but suits well the project's needs.",
          weight: 0.97,
          pointsLegacy: -4,
        },
        {
          answer: 'It is generic and lacks originality as shown with examples.',
          weight: 0.75,
          pointsLegacy: -27,
        },
        {
          answer: 'The contribution is a copy of an existing design.',
          weight: 0,
          pointsLegacy: -100,
        },
      ],
    },
    {
      question: 'What is the technical difficulty of the contribution?',
      answers: [
        {
          answer:
            'Very high. The contribution consists of very complex elements, shapes and/or effects made by the contributor.',
          weight: 1.02,
          pointsLegacy: 3,
        },
        {
          answer:
            'High. Majority of the contribution consists of complex elements, shapes and/or effects made by the contributor.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Medium. The contribution consists of some complex elements, shapes and/or effects made by the contributor.',
          weight: 0.95,
          pointsLegacy: -6,
        },
        {
          answer: 'Low. The contribution consists of simple elements, shapes and/or effects.',
          weight: 0.8,
          pointsLegacy: -18,
        },
      ],
    },
    {
      question:
        'Is the provided design actively used by the project? (e.g. on official website, app store, in an app, software)',
      answers: [
        {
          answer:
            'Yes, and it is publicly displayed or its use can be easily verified within the software/app.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: "It is not publicly used but the assets can be found among project's materials.",
          weight: 0.9,
          pointsLegacy: -8,
        },
        {
          answer: 'It was not used, but the proposed designs are of a high quality.',
          weight: 0.7,
          pointsLegacy: -25,
        },
        {
          answer: 'It was not used as it provides little to no value to the project.',
          weight: 0,
          pointsLegacy: -100,
        },
      ],
    },
  ],
  'task-request': [
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.97,
          pointsLegacy: -2,
        },
        {
          answer: 'Below Average',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.6,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value the contribution solving this task will bring to the open source community?',
      answers: [
        {
          answer:
            'This task request, if it can be solved, can bring great, unique and impactful value to the community as a whole.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This task request, if it can be solved, adds significant value to the open source community, or is of critical importance to the specific project',
          weight: 0.98,
          pointsLegacy: -5,
        },
        {
          answer:
            'This task request, if it can be solved, adds some value to the open source community or is only valuable to the specific project.',
          weight: 0.87,
          pointsLegacy: -17.5,
        },
        {
          answer:
            'This task request cannot be solved and/or adds no value to the open source community or the specific project.',
          weight: 0.2,
          pointsLegacy: -35,
        },
      ],
    },
    {
      question: 'How feasible and executable is the task requested?',
      answers: [
        {
          answer: 'Very. It is likely to receive multiple potential solutions.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Moderate. It is likely to receive some potential solutions.',
          weight: 0.97,
          pointsLegacy: -4,
        },
        {
          answer:
            'Low. The solution will demand a great deal of work, but someone invested in the project could take on this.',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'Impossible. It is very unlikely anyone will undertake this task.',
          weight: 0.6,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question: 'How impactful will this task be for the specific project?',
      answers: [
        {
          answer: 'Obviously crucial for ongoing project development.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'It will have a major impact on the development and/or end user experience.',
          weight: 0.99,
          pointsLegacy: -1,
        },
        {
          answer: 'It holds some significance to ongoing project development.',
          weight: 0.95,
          pointsLegacy: -5,
        },
        {
          answer: 'The solution to this task will have little to no impact on the project.',
          weight: 0.7,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How descriptive is the task request, and does it provide all necessary information to solve it?',
      answers: [
        {
          answer:
            'The task request is very descriptive and includes all the required information, as well as additional important data or tips.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'The task request is sufficiently descriptive and includes the information required to solve it.',
          weight: 0.98,
          pointsLegacy: -1.5,
        },
        {
          answer:
            'The task request includes some information, but it is partially inaccurate, lacking or insufficient to solve the task.',
          weight: 0.85,
          pointsLegacy: -12,
        },
        {
          answer: 'The task request is confusing, lacking information and resources.',
          weight: 0.6,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'Is this task request similar to another submitted by the same project owner?',
      answers: [
        {
          answer:
            'No, this task request is unique and different from other tasks every posted by this project owner.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Yes, but it was submitted over 30 days ago.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer:
            'Yes, but it is sufficiently unique and/or necessary for the project development.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer:
            'Yes, this task request is too similar or a direct copy of another task request submitted by this project owner in the past 30 days.',
          weight: 0.9,
          pointsLegacy: -10,
        },
      ],
    },
  ],
  suggestions: [
    {
      question:
        'If implemented, how much impact on the functionality and/usability of the project will this suggestion have?',
      answers: [
        {
          answer: 'Major impact.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Some noticeable impact.',
          weight: 0.95,
          pointsLegacy: -15,
        },
        {
          answer: 'Minor improvement.',
          weight: 0.9,
          pointsLegacy: -20,
        },
        {
          answer:
            'Negligible added-value to the project / impossible or extremely difficult implementation is required.',
          weight: 0.6,
          pointsLegacy: -30,
        },
      ],
    },
    {
      question:
        'Does this suggestion match the goals, intended applications and/or roadmap of the project?',
      answers: [
        {
          answer:
            'Yes, it’s closely related to the uses and applications of the project and may enhance it further toward project goals.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'It is related and may add value, but has no direct relation to the main purpose and/or applications of the project.',
          weight: 0.92,
          pointsLegacy: -5,
        },
        {
          answer:
            'It is loosely related to one of purposes, applications or goals of the project and may add some value to it.',
          weight: 0.87,
          pointsLegacy: -7,
        },
        {
          answer:
            'It is not related to the project goals at all and holds no potential added-value.',
          weight: 0.1,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Is the proposal realistic and feasible?',
      answers: [
        {
          answer:
            'Yes, it can definitely be implemented and is important enough to warrant the developers’ attention and time.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Yes, it can definitely be implemented, but is not likely to get noticed by the development team immediately.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer:
            'It can be implemented in theory, but no recommendations or guidelines were included in the suggestion post.',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'No, it’s impossible or non-cost-effective to implement.',
          weight: 0.3,
          pointsLegacy: -13,
        },
      ],
    },
    {
      question:
        'Has the user provided any mockups (illustrations) of potential suggestion implementation appearance?',
      answers: [
        {
          answer: 'Yes, and they’re of excellent quality.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'No, but the mockups are inapplicable for this suggestion.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Yes, but the quality of the mockups is poor.',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer:
            'No, there are no mockups included even though they are needed / No potential solution was presented.',
          weight: 0.7,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Has the contributor proposed a possible solution to implement the suggestion?',
      answers: [
        {
          answer:
            'Yes, the possible solution is described in great detail and makes a lot of sense.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Yes, but the possible solution was not described in sufficient detail.',
          weight: 0.95,
          pointsLegacy: -5,
        },
        {
          answer: 'No, but the implementation is self explanatory or very easily executed.',
          weight: 0.95,
          pointsLegacy: -7,
        },
        {
          answer: 'No, there’s no proposed solution though one is clearly necessary.',
          weight: 0.8,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'Is the suggested feature commonly available in other projects or submitted suggestions?',
      answers: [
        {
          answer: 'No, it’s unique or very rare.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Yes, but it’s a feature of high importance for this kind of project.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer:
            "It's common, but it will have some measurable positive impact on the user experience or product functionality.",
          weight: 0.9,
          pointsLegacy: -5,
        },
        {
          answer: 'It’s extremely common and may have been left out intentionally.',
          weight: 0.7,
          pointsLegacy: -7,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.95,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.85,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.5,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.05,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution can be of value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.85,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -20,
        },
      ],
    },
  ],
  'video-tutorials': [
    {
      question: 'How many substantial concepts does this tutorial address?',
      answers: [
        {
          answer: '4-5 substantial concepts covered in the tutorial',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: '2-3 substantial concepts covered in the tutorial',
          weight: 0.97,
          pointsLegacy: -5,
        },
        {
          answer: '1 substantial concept covered in the tutorial',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'More than 5 substantial concepts covered in the tutorial',
          weight: 0.85,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'Does the contribution text and images support the video tutorial?',
      answers: [
        {
          answer: 'Exceptionally good text and, when applicable, images for concepts covered.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Thorough text and, when applicable, images for concepts covered.',
          weight: 0.98,
          pointsLegacy: -5,
        },
        {
          answer: 'Insufficient volume of text and images.',
          weight: 0.9,
          pointsLegacy: -7,
        },
        {
          answer: 'No or very little text and images.',
          weight: 0.85,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Is the video clearly prepared and structured?',
      answers: [
        {
          answer:
            'Both the presenter and the video are exceptionally organized, structured and presented.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Presenter is prepared and video concepts are structured.',
          weight: 0.98,
          pointsLegacy: -5,
        },
        {
          answer:
            'Presenter has moments when he/she seems unprepared and/or the content seems to be unstructured.',
          weight: 0.9,
          pointsLegacy: -12,
        },
        {
          answer: 'Presenter seems unprepared and/or video is unstructured.',
          weight: 0.6,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question:
        'Does the contributor provide supplementary resources, such as code and sample files in the contribution post or a GitHub repository?',
      answers: [
        {
          answer: 'Contributor provided exceptional supplementary resources.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Contributor provided good supplementary resources.',
          weight: 0.99,
          pointsLegacy: -1,
        },
        {
          answer: 'Contributor provided minimal supplementary resources.',
          weight: 0.97,
          pointsLegacy: -4,
        },
        {
          answer: 'No supplementary resources were provided.',
          weight: 0.95,
          pointsLegacy: -5,
        },
      ],
    },
    {
      question: 'How would you describe the sound quality of the video?',
      answers: [
        {
          answer: 'Sound quality is excellent and sounds professionally produced.',
          weight: 1.02,
          pointsLegacy: 0,
        },
        {
          answer: 'The sound is clear and understandable.',
          weight: 0.99,
          pointsLegacy: -3,
        },
        {
          answer: 'Low quality of sound and/or mildly distracting background noise.',
          weight: 0.95,
          pointsLegacy: -7,
        },
        {
          answer: 'Distracting background noise and/or very low quality recording.',
          weight: 0.8,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question: 'Does the presenter speak clearly and is easy to understand?',
      answers: [
        {
          answer: 'Yes, presenter’s speech is highly engaging and professional.',
          weight: 1,
        },
        {
          answer: 'Yes, presenter’s speech is easy to understand.',
          weight: 0.99,
          pointsLegacy: -3,
        },
        {
          answer: 'Portions of the presenter’s speech were comprehensible.',
          weight: 0.9,
          pointsLegacy: -8,
        },
        {
          answer: 'Little or none of the presenter’s speech was understandable.',
          weight: 0.5,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'Is the title of the tutorial and the concepts being covered visible on the video in text overlay form?',
      answers: [
        {
          answer:
            'Title and concepts covered are present in the video at all times in a non-disruptive way.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Title and concepts covered appear temporarily when they are addressed.',
          weight: 0.99,
          pointsLegacy: -1,
        },
        {
          answer: 'Only the title is presented and the concepts are not shown.',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Neither title nor concepts covered are presented in the video text overlay.',
          weight: 0.95,
          pointsLegacy: -5,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'Good',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average',
          weight: 0.95,
          pointsLegacy: -3,
        },
        {
          answer: 'Below Average',
          weight: 0.85,
          pointsLegacy: -7,
        },
        {
          answer: 'Low Quality',
          weight: 0.5,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        {
          answer:
            'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
          weight: 1.05,
          pointsLegacy: 5,
        },
        {
          answer:
            'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
          weight: 0.85,
          pointsLegacy: -12,
        },
        {
          answer:
            'This contribution adds nearly no value to the open source community and ecosystem or the specific project.',
          weight: 0.2,
          pointsLegacy: -20,
        },
      ],
    },
  ],
  development: [
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'The post is of very high quality.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The post is of decent quality.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer: 'The quality of the post is below average.',
          weight: 0.95,
          pointsLegacy: -7,
        },
        {
          answer: 'The post is hard to read and the content is sometimes hard to understand.',
          weight: 0.8,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'How would you rate the impact and significance of the contribution to the project and/or open source ecosystem in terms of uniqueness, usefulness and potential future applications?',
      answers: [
        {
          answer:
            'This contribution adds high value and holds great significance for the project and/or open source ecosystem.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'This contribution adds significant value to the project and/or open source ecosystem.',
          weight: 0.95,
          pointsLegacy: -10,
        },
        {
          answer: 'This contribution adds some value to the project and/or open source ecosystem.',
          weight: 0.85,
          pointsLegacy: -22.5,
        },
        {
          answer:
            'This contribution holds little value to the project and/or open source ecosystem.',
          weight: 0.3,
          pointsLegacy: -37.5,
        },
      ],
    },
    {
      question: 'How would you rate the total volume of work invested into this contribution?',
      answers: [
        {
          answer: 'This contribution appears to have demanded a lot of intensive work.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'This contribution appears to have required an average volume of work.',
          weight: 0.95,
          pointsLegacy: -6,
        },
        {
          answer: 'This contribution shows some work done.',
          weight: 0.85,
          pointsLegacy: -20,
        },
        {
          answer: 'This contribution shows little work done.',
          weight: 0.7,
          pointsLegacy: -30,
        },
      ],
    },
    {
      question: 'How would you rate the quality of the code submitted?',
      answers: [
        {
          answer: 'High - it follows all best practices.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average - it follows most best practices.',
          weight: 0.95,
          pointsLegacy: -6,
        },
        {
          answer: 'Low - it follows some best practices.',
          weight: 0.88,
          pointsLegacy: -14,
        },
        {
          answer: "Very low - it doesn't follow any best practices.",
          weight: 0.75,
          pointsLegacy: -20,
        },
      ],
    },
    {
      question:
        'How would you rate the proficiency and expertise necessary to fix the bug / implement the added feature(s)?',
      answers: [
        {
          answer: 'High - a lot of research and specific proficiency were required.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average - some research and proficiency were required.',
          weight: 0.98,
          pointsLegacy: -2.5,
        },
        {
          answer: 'Low - little proficiency or skill were required.',
          weight: 0.95,
          pointsLegacy: -5,
        },
        {
          answer: 'Insignificant - only basic knowledge or skills were necessary.',
          weight: 0.92,
          pointsLegacy: -7.5,
        },
      ],
    },
    {
      question: 'How would you rate the accuracy and readability of the commit messages?',
      answers: [
        {
          answer: 'High - they are concise, descriptive and consistent.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Average - they are mostly concise, descriptive and consistent.',
          weight: 0.99,
          pointsLegacy: -0.5,
        },
        {
          answer: 'Low - they could be more concise, descriptive or consistent.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: "Very low - they aren't concise, descriptive or consistent at all.",
          weight: 0.97,
          pointsLegacy: -2.5,
        },
      ],
    },
    {
      question: 'How do you rate the quality of the comments in the code?',
      answers: [
        {
          answer: 'High - everything is well-commented and adds to the readability of the code.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Average - most of the code is commented and most if it adds to the readability of the code.',
          weight: 0.99,
          pointsLegacy: -2,
        },
        {
          answer: 'Low - little of the code is commented, but it still adds to the readability.',
          weight: 0.97,
          pointsLegacy: -3.5,
        },
        {
          answer: 'Very low - the added comments provide no value or no comments were made at all.',
          weight: 0.95,
          pointsLegacy: -5,
        },
      ],
    },
  ],
  translations: [
    {
      question: 'How do you rate the overall accuracy of the translated text?',
      answers: [
        {
          answer: 'Excellent',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Very Good',
          weight: 0.97,
          pointsLegacy: -6,
        },
        {
          answer: 'Good',
          weight: 0.93,
          pointsLegacy: -10,
        },
        {
          answer: 'Fairly Good',
          weight: 0.85,
          pointsLegacy: -13,
        },
        {
          answer: 'Sufficient',
          weight: 0.75,
          pointsLegacy: -16,
        },
        {
          answer: 'Insufficient',
          weight: 0.45,
          pointsLegacy: -58,
        },
        {
          answer: 'Bad',
          weight: 0.2,
          pointsLegacy: -91,
        },
        {
          answer: 'Unacceptable',
          weight: 0,
          pointsLegacy: -125,
        },
      ],
    },
    {
      question: 'How many mistakes were found in the translated text?',
      answers: [
        {
          answer: 'There are no errors',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: '0.1% - 1 Error every 1000 words',
          weight: 0.95,
          pointsLegacy: -8,
        },
        {
          answer: '0.3% - 3 Error every 1000 words',
          weight: 0.87,
          pointsLegacy: -14,
        },
        {
          answer: '0.6% - 6 Error every 1000 words',
          weight: 0.82,
          pointsLegacy: -19,
        },
        {
          answer: '1% - 10 Error every 1000 words',
          weight: 0.78,
          pointsLegacy: -23,
        },
        {
          answer: '2% - 20 Error every 1000 words',
          weight: 0.5,
          pointsLegacy: -78,
        },
        {
          answer: '3% - 30 Error every 1000 words',
          weight: 0.2,
          pointsLegacy: -121,
        },
        {
          answer: '>3% - more than 30 Error every 1000 words',
          weight: 0,
          pointsLegacy: -135,
        },
      ],
    },
    {
      question: 'How do you rate the overall accuracy of the translated text?',
      answers: [
        {
          answer: 'Excellent',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Very Good',
          weight: 0.97,
          pointsLegacy: -4,
        },
        {
          answer: 'Good',
          weight: 0.93,
          pointsLegacy: -7,
        },
        {
          answer: 'Fairly Good',
          weight: 0.85,
          pointsLegacy: -9,
        },
        {
          answer: 'Sufficient',
          weight: 0.75,
          pointsLegacy: -11,
        },
        {
          answer: 'Insufficient',
          weight: 0.45,
          pointsLegacy: -26,
        },
        {
          answer: 'Bad',
          weight: 0.2,
          pointsLegacy: -37,
        },
        {
          answer: 'Unacceptable',
          weight: 0,
          pointsLegacy: -115,
        },
      ],
    },
    {
      question:
        'Did the post include all the information needed to fully evaluate the translation? If so, how would you rate the readability and grammar of the post?',
      answers: [
        {
          answer: 'Excellent',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'Very Good',
          weight: 0.99,
          pointsLegacy: -2,
        },
        {
          answer: 'Good',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Fairly Good',
          weight: 0.9,
          pointsLegacy: -4,
        },
        {
          answer: 'Sufficient',
          weight: 0.8,
          pointsLegacy: -5,
        },
        {
          answer: 'Insufficient',
          weight: 0.65,
          pointsLegacy: -28,
        },
        {
          answer: 'Bad',
          weight: 0.3,
          pointsLegacy: -51,
        },
        {
          answer: 'Unacceptable',
          weight: 0,
          pointsLegacy: -105,
        },
      ],
    },
    {
      question: 'What is the legibility of the translated text?',
      answers: [
        {
          answer: 'Excellent',
          weight: 1,
          pointsLegacy: -0,
        },
        {
          answer: 'Very Good',
          weight: 0.99,
          pointsLegacy: -2,
        },
        {
          answer: 'Good',
          weight: 0.97,
          pointsLegacy: -3,
        },
        {
          answer: 'Fairly Good',
          weight: 0.92,
          pointsLegacy: -4,
        },
        {
          answer: 'Sufficient',
          weight: 0.85,
          pointsLegacy: -5,
        },
        {
          answer: 'Insufficient',
          weight: 0.6,
          pointsLegacy: -28,
        },
        {
          answer: 'Bad',
          weight: 0.2,
          pointsLegacy: -51,
        },
        {
          answer: 'Unacceptable',
          weight: 0,
          pointsLegacy: -105,
        },
      ],
    },
    {
      question:
        'What was the total volume (words) of the translated text in this contribution (excluding duplicate phrases and non-translatable content)?',
      answers: [
        {
          answer: 'Equal or more than 2000 words',
          weight: 1.05,
          pointsLegacy: 0,
        },
        {
          answer: 'Between 1800 and 2000 words',
          weight: 1,
          pointsLegacy: -2,
        },
        {
          answer: 'Between 1600 and 1800 words',
          weight: 0.98,
          pointsLegacy: -4,
        },
        {
          answer: 'Between 1400 and 1600 words',
          weight: 0.96,
          pointsLegacy: -6,
        },
        {
          answer: 'Between 1200 and 1400 words',
          weight: 0.94,
          pointsLegacy: -8,
        },
        {
          answer: 'Between 1000 and 1200 words',
          weight: 0.9,
          pointsLegacy: -10,
        },
        {
          answer: 'Between 900 and 1000 words',
          weight: 0.88,
          pointsLegacy: -12,
        },
        {
          answer: 'Between 700 and 900 words',
          weight: 0.84,
          pointsLegacy: -15,
        },
        {
          answer: 'Between 500 and 700 words',
          weight: 0.8,
          pointsLegacy: -18,
        },
        {
          answer: 'Less than 500 words',
          weight: 0.75,
          pointsLegacy: -21,
        },
      ],
    },
  ],
  'anti-abuse': [
    {
      question: 'How aware is the author of the anti-abuse topic discussed in the post?',
      answers: [
        {
          answer:
            'It is clear that they are closely familiar with the anti-abuse topic and its details.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The author offers some valuable insights about the anti-abuse topic.',
          weight: 0.98,
          pointsLegacy: -3,
        },
        {
          answer: 'Most of the post contains information gathered from other sources.',
          weight: 0.88,
          pointsLegacy: -5,
        },
        {
          answer: 'The author knows little or nothing about the anti-abuse topic.',
          weight: 0.2,
          pointsLegacy: -100,
        },
      ],
    },
    {
      question:
        'How would you rate the overall value of this contribution to the anti-abuse community?',
      answers: [
        {
          answer: 'This contribution greatly helps the anti-abuse community.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'This contribution helps the anti-abuse community.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: 'This contribution moderately helps the anti-abuse community.',
          weight: 0.9,
          pointsLegacy: -5,
        },
        {
          answer: 'This contribution does not help the anti-abuse community.',
          weight: 0.2,
          pointsLegacy: -100,
        },
      ],
    },
    {
      question: 'Is the post written in proper English?',
      answers: [
        {
          answer: 'There are 0 to 3 mistakes in grammar or spelling.',
          weight: 1,
          pointsLegacy: 2,
        },
        {
          answer: 'The author made 3 - 6 grammar mistakes or misspellings.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: 'The post has 6 - 10 grammar mistakes or misspellings.',
          weight: 0.9,
          pointsLegacy: -8,
        },
        {
          answer: 'The post has 11 or more cases of incorrect grammar and misspelling.',
          weight: 0.7,
          pointsLegacy: -30,
        },
      ],
    },
    {
      question:
        'Does the contribution help raise awareness and education about abuse on the platform?',
      answers: [
        {
          answer: 'The contribution greatly helps raise awareness about abuse.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The contribution helps raise awareness about abuse.',
          weight: 0.99,
          pointsLegacy: -2,
        },
        {
          answer: 'The contribution raises awareness about abuse somewhat.',
          weight: 0.94,
          pointsLegacy: -5,
        },
        {
          answer: 'The contribution does not raise awareness about abuse.',
          weight: 0.9,
          pointsLegacy: -10,
        },
      ],
    },
    {
      question:
        'Is the contribution enough to empower the reader to participate in anti-abuse initiatives?',
      answers: [
        {
          answer:
            'The contribution greatly empowers the reader to participate in antiabuse initiatives.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The contribution empowers the reader to participate in antiabuse initiatives.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer:
            'The contribution slightly empowers the reader to participate in antiabuse initiatives.',
          weight: 0.95,
          pointsLegacy: -5,
        },
        {
          answer:
            'The contribution does not empower the reader to participate in antiabuse initiatives.',
          weight: 0.88,
          pointsLegacy: -9,
        },
      ],
    },
    {
      question:
        'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        {
          answer: 'The quality of the post is fantastic.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'The post is of decent quality, but there is room for improvement.',
          weight: 0.95,
          pointsLegacy: -3,
        },
        {
          answer: 'The post is of average quality.',
          weight: 0.88,
          pointsLegacy: -5,
        },
        {
          answer: 'The quality of the post is below average.',
          weight: 0.65,
          pointsLegacy: -15,
        },
      ],
    },
    {
      question: 'What is the overall volume of the blog post?',
      answers: [
        {
          answer: 'More than 850 words.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: '676-850 words.',
          weight: 0.96,
          pointsLegacy: -1,
        },
        {
          answer: '501-675 words.',
          weight: 0.9,
          pointsLegacy: -2,
        },
        {
          answer: 'Less than 500 words.',
          weight: 0.85,
          pointsLegacy: -3,
        },
      ],
    },
    {
      question: 'Is the post a part of a series?',
      answers: [
        {
          answer: 'It is clear that it is a part of an ongoing series of posts.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: 'It is clear that it is the first post of an upcoming series.',
          weight: 0.99,
          pointsLegacy: -1,
        },
        {
          answer: 'This is the first post from the author.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: 'The post is not a part of any series.',
          weight: 0.97,
          pointsLegacy: -2,
        },
      ],
    },
    {
      question: 'Was relevant quality graphic or video content included in this post?',
      answers: [
        {
          answer:
            'Yes, at least 4 distinguishable instances of relevant graphic or video content were included.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'Yes, between 2 and 3 distinguishable instances of relevant graphic or video content were included.',
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: 'A single instance of relevant graphic or video content was included.',
          weight: 0.94,
          pointsLegacy: -5,
        },
        {
          answer: 'No graphic or video content was included.',
          weight: 0.9,
          pointsLegacy: -9,
        },
      ],
    },
    {
      question: 'Did you enjoy reading the contribution?',
      answers: [
        {
          answer: 'I enjoyed reading this post, it was excellent.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer: "The post was informative but I didn't enjoyed reading it.",
          weight: 0.98,
          pointsLegacy: -2,
        },
        {
          answer: 'I did not enjoy reading this post at all.',
          weight: 0.94,
          pointsLegacy: -9,
        },
      ],
    },
    {
      question: "What is the author's involvement level in the anti-abuse community?",
      answers: [
        {
          answer: 'The author is 100% committed to, and involved in, the anti-abuse community.',
          weight: 1,
          pointsLegacy: 0,
        },
        {
          answer:
            'The author often contributes, but is mostly involved with other projects unrelated to anti-abuse community.',
          weight: 0.98,
          pointsLegacy: -1,
        },
        {
          answer: 'The author is occasionally involved in the anti-abuse community.',
          weight: 0.94,
          pointsLegacy: -4,
        },
        {
          answer: 'The author is rarely involved in anti-abuse community or is new to it.',
          weight: 0.9,
          pointsLegacy: -9,
        },
      ],
    },
  ],
};
