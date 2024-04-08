import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor() {}

  generatePrefixedTags(title: string) {
    // Context-specific tags relevant to villages in India
    const contextTags = [
      'gaon',
      'samuday',
      'gramin',
      'awas',
      'desi',
      'prakritik',
      'sanskriti',
      'kheti',
      'krishi',
      'paryavaran',
      'sustainable',
      'jeevan shaili',
      'lok katha',
      'tyohar',
      'handicraft',
      'shilpkala',
      'paramparik',
      'itihas',
      'dharohar',
      'janjati',
      'manchitra',
      'bhasha',
      'sahitya',
      'lok geet',
      'nritya',
      'folk art',
      'vividhata',
      'sanskriti virasat',
      'parivarik',
      'samuhik',
    ];

    // Extract key words from title to use as prefixes; you might want to customize this part
    // This example directly uses "Sisai" and "Kalirawana" from your title, assuming "My" and "Village" to be too general
    const titleKeywords = title.split(' ');

    // Generate prefixed tags by combining each title keyword with each context tag
    let prefixedTags: any = [];
    titleKeywords.forEach((keyword) => {
      prefixedTags = prefixedTags.concat(
        contextTags.map((tag) => `${keyword} ${tag}`)
      );
    });

    // Optionally, add "Village" related custom tags if needed, using a similar mapping logic
    const villageTags = ['life', 'culture', 'community'];
    const villagePrefixedTags = villageTags.map((tag) => `${title[0]} ${tag}`);

    // Combine all generated tags
    const allTags = [...prefixedTags, ...villagePrefixedTags];

    // Return the combined tags as a comma-separated string
    return allTags.join(', ');
  }
}
