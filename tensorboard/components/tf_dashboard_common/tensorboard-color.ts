/* Copyright 2016 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

const style = document.createElement('style');
style.setAttribute('is', 'custom-style');
style.textContent = `
  :root {
    --tb-orange-weak: #ffa726;
    --tb-orange-strong: #f57c00;
    --tb-orange-dark: #dc7320;
    --tb-grey-darker: #e2e2e2;
    --tb-grey-lighter: #f3f3f3;
    --tb-ui-dark-accent: #757575;
    --tb-ui-light-accent: #e0e0e0;
    --tb-ui-border: var(--paper-grey-300);
    --tb-graph-faded: #e0d4b3;
    --tb-secondary-text-color: var(--paper-grey-800);
    --tb-raised-button-shadow-color: rgba(0, 0, 0, 0.2);
    --primary-background-color: #fff;
    --secondary-background-color: #e9e9e9;
  }

  :root .dark-mode {
    --tb-ui-border: var(--paper-grey-700);
    --tb-ui-dark-accent: var(--paper-grey-400);
    --tb-ui-light-accent: var(--paper-grey-600);
    --tb-secondary-text-color: var(--paper-grey-400);
    --tb-raised-button-shadow-color: rgba(255, 255, 255, 0.5);
    --primary-text-color: #fff;
    --secondary-text-color: var(--paper-grey-400);
    --primary-background-color: #303030;  /* material grey A400. */
    --secondary-background-color: #3a3a3a;
  }
`;
document.head.appendChild(style);
