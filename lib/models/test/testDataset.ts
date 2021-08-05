import {Dataset} from "../src/Dataset";

// Obtained by logging a JSON.stringify in the DatasetRdfReader test
export const testDataset: Dataset = {
  "collections": [{
    "institutionUri": "http://example.com/institution0",
    "title": "Institution0Collection0",
    "uri": "http://example.com/institution0/collection0",
  }, {
    "institutionUri": "http://example.com/institution1",
    "title": "Institution1Collection0",
    "uri": "http://example.com/institution1/collection0",
  }],
  "images": [{
    "depictsUri": "http://example.com/institution0/collection0/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object0Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object0Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object0Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object0Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object0Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object0Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object1Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object1Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object1Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object1Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object1Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object1Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object2Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object2Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object2Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object2Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object2Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object2Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object3Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object3Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object3Image0",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object3Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Collection0Object3Image1",
  }, {
    "depictsUri": "http://example.com/institution0/collection0/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Collection0Object3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Collection0Object3Image1",
  }, {
    "depictsUri": "http://example.com/institution0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Image0",
  }, {
    "depictsUri": "http://example.com/institution0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Image0",
  }, {
    "depictsUri": "http://example.com/institution0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Image0",
  }, {
    "depictsUri": "http://example.com/institution0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0Image1",
  }, {
    "depictsUri": "http://example.com/institution0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0Image1",
  }, {
    "depictsUri": "http://example.com/institution0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject0Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject0Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject0Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject0Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject0Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject0Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject1Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject1Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject1Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject1Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject1Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject1Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject2Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject2Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject2Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject2Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject2Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject2Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject3Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject3Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject3Image0",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution0SharedObject3Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution0SharedObject3Image1",
  }, {
    "depictsUri": "http://example.com/institution0/shared/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution0",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution0SharedObject3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution0SharedObject3Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object0Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object0Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object0Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object0Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object0Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object0Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object1Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object1Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object1Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object1Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object1Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object1Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object2Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object2Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object2Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object2Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object2Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object2Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object3Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object3Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object3Image0",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object3Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Collection0Object3Image1",
  }, {
    "depictsUri": "http://example.com/institution1/collection0/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Collection0Object3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Collection0Object3Image1",
  }, {
    "depictsUri": "http://example.com/institution1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Image0",
  }, {
    "depictsUri": "http://example.com/institution1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Image0",
  }, {
    "depictsUri": "http://example.com/institution1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Image0",
  }, {
    "depictsUri": "http://example.com/institution1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1Image1",
  }, {
    "depictsUri": "http://example.com/institution1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1Image1",
  }, {
    "depictsUri": "http://example.com/institution1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject0Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject0Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject0Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject0Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object0",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject0Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object0",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject0Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object0",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject0Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject0Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject1Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject1Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject1Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject1Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object1",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject1Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object1",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject1Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object1",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject1Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject1Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject2Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject2Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject2Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject2Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object2",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject2Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object2",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject2Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object2",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject2Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject2Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject3Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject3Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject3Image0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject3Image0",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object3",
    "exactDimensions": {"height": 1000, "width": 1000},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": null,
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/1000x1000?text=Institution1SharedObject3Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object3",
    "exactDimensions": {"height": 600, "width": 600},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/600x600?text=Institution1SharedObject3Image1",
  }, {
    "depictsUri": "http://example.com/institution1/shared/object3",
    "exactDimensions": {"height": 75, "width": 75},
    "institutionUri": "http://example.com/institution1",
    "maxDimensions": null,
    "originalImageUri": "https://place-hold.it/1000x1000?text=Institution1SharedObject3Image1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "src": null,
    "uri": "https://place-hold.it/75x75?text=Institution1SharedObject3Image1",
  }],
  "institutions": [{
    "name": "Institution0",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "uri": "http://example.com/institution0",
  }, {
    "name": "Institution1",
    "rights": {
      "creator": null,
      "holder": {"type": "text", "value": "Institution1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "uri": "http://example.com/institution1",
  }],
  "licenses": [{
    "identifier": "BSD",
    "title": "BSD",
    "uri": "http://creativecommons.org/licenses/BSD/",
  }, {
    "identifier": "GPL",
    "title": "GNU General Public License",
    "uri": "http://creativecommons.org/licenses/GPL/2.0/",
  }, {
    "identifier": "LGPL",
    "title": "GNU Lesser General Public License",
    "uri": "http://creativecommons.org/licenses/LGPL/2.1/",
  }, {
    "identifier": "MIT",
    "title": "MIT",
    "uri": "http://creativecommons.org/licenses/MIT/",
  }, {
    "identifier": "by-nc-nd",
    "title": "Attribution-NonCommercial-NoDerivatives 4.0 International",
    "uri": "http://creativecommons.org/licenses/by-nc-nd/4.0/",
  }, {
    "identifier": "by-nc-sa",
    "title": "Attribution-NonCommercial-ShareAlike 4.0 International",
    "uri": "http://creativecommons.org/licenses/by-nc-sa/4.0/",
  }, {
    "identifier": "by-nc",
    "title": "Attribution-NonCommercial 4.0 International",
    "uri": "http://creativecommons.org/licenses/by-nc/4.0/",
  }, {
    "identifier": "by-nd-nc",
    "title": "Attribution-NoDerivs-NonCommercial 1.0 Generic",
    "uri": "http://creativecommons.org/licenses/by-nd-nc/1.0/",
  }, {
    "identifier": "by-nd",
    "title": "Attribution-NoDerivatives 4.0 International",
    "uri": "http://creativecommons.org/licenses/by-nd/4.0/",
  }, {
    "identifier": "by-sa",
    "title": "Attribution-ShareAlike 4.0 International",
    "uri": "http://creativecommons.org/licenses/by-sa/4.0/",
  }, {
    "identifier": "by",
    "title": "Attribution 4.0 International",
    "uri": "http://creativecommons.org/licenses/by/4.0/",
  }, {
    "identifier": "devnations",
    "title": "Developing Nations License",
    "uri": "http://creativecommons.org/licenses/devnations/2.0/",
  }, {
    "identifier": "nc-sa",
    "title": "NonCommercial-ShareAlike 1.0 Generic",
    "uri": "http://creativecommons.org/licenses/nc-sa/1.0/",
  }, {
    "identifier": "nc-sampling+",
    "title": "NonCommercial Sampling Plus 1.0",
    "uri": "http://creativecommons.org/licenses/nc-sampling+/1.0/",
  }, {
    "identifier": "nd-nc",
    "title": "NoDerivs-NonCommercial 1.0 Generic",
    "uri": "http://creativecommons.org/licenses/nd-nc/1.0/",
  }, {
    "identifier": "nd",
    "title": "NoDerivs 1.0 Generic",
    "uri": "http://creativecommons.org/licenses/nd/1.0/",
  }, {
    "identifier": "publicdomain",
    "title": "Public Domain",
    "uri": "http://creativecommons.org/licenses/publicdomain/",
  }, {
    "identifier": "sa",
    "title": "ShareAlike 1.0 Generic",
    "uri": "http://creativecommons.org/licenses/sa/1.0/",
  }, {
    "identifier": "sampling+",
    "title": "Sampling Plus 1.0",
    "uri": "http://creativecommons.org/licenses/sampling+/1.0/",
  }, {
    "identifier": "sampling",
    "title": "Sampling 1.0",
    "uri": "http://creativecommons.org/licenses/sampling/1.0/",
  }, {
    "identifier": "mark",
    "title": "Public Domain Mark 1.0",
    "uri": "http://creativecommons.org/publicdomain/mark/1.0/",
  }, {
    "identifier": "CC0",
    "title": "CC0 1.0 Universal",
    "uri": "http://creativecommons.org/publicdomain/zero/1.0/",
  }, {"identifier": "nc", "title": "NonCommercial 1.0 Generic", "uri": "http://creativecommons.org/licenses/nc/1.0/"}],
  "objects": [{
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/0",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object0Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object0Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0Collection0Object0",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object0 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object0 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 0"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 1",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-09",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object0 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object0 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 0"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 1",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 0"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 1",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 0"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 1",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object0 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object0 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 0",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0Collection0Object0 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 0"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 1",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 0"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 1",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 0"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 1",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 0"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 1",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 0"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 0",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 0"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 1",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 0"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 1",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 0"},
      "holder": {"type": "text", "value": "Institution0Collection0Object0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0Collection0Object0",
    "uri": "http://example.com/institution0/collection0/object0",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/1",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object1Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object1Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0Collection0Object1",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object1 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object1 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 1"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 2",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-07",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object1 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object1 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 1"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 2",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 1"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 2",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 1"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 2",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object1 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object1 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0Collection0Object1 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 1"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 2",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 1"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 2",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 1"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 2",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 1"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 2",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 1"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 1"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 2",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 1"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 2",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/1"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 1"},
      "holder": {"type": "text", "value": "Institution0Collection0Object1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0Collection0Object1",
    "uri": "http://example.com/institution0/collection0/object1",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/2",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object2Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object2Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0Collection0Object2",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object2 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object2 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 2"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 3",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-07"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-06",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object2 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object2 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 2"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 3",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 2"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 3",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 2"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 3",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object2 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object2 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0Collection0Object2 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 2"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 3",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 2"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 3",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 2"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 3",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 2"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 3",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 2"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 2"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 3",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 2"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 3",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 2"},
      "holder": {"type": "text", "value": "Institution0Collection0Object2 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0Collection0Object2",
    "uri": "http://example.com/institution0/collection0/object2",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/3",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object3Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0Collection0Object3Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0Collection0Object3",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object3 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0Collection0Object3 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 3"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 4",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-06"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-05",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object3 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0Collection0Object3 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 3"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 4",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 3"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 4",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 3"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 4",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object3 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0Collection0Object3 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 4",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0Collection0Object3 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 3"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 4",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 3"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 4",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 3"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 4",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 3"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 4",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 3"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 4",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 4",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 3"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 4",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 3"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 4",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/3"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 3"},
      "holder": {"type": "text", "value": "Institution0Collection0Object3 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0Collection0Object3",
    "uri": "http://example.com/institution0/collection0/object3",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/0",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject0Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject0Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0SharedObject0",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject0 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject0 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 0"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 1",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-09",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject0 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject0 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 0"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 1",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 0"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 1",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 0"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 1",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject0 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject0 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 0",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0SharedObject0 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 0"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 1",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 0"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 1",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 0"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 1",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 0"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 1",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 0"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 0",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 0"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 1",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 0"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 1",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 0"},
      "holder": {"type": "text", "value": "Institution0SharedObject0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0SharedObject0",
    "uri": "http://example.com/institution0/shared/object0",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/1",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject1Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject1Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0SharedObject1",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject1 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject1 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 1"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 2",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-07",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject1 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject1 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 1"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 2",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 1"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 2",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 1"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 2",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject1 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject1 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0SharedObject1 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 1"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 2",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 1"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 2",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 1"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 2",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 1"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 2",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 1"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 1"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 2",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 1"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 2",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/1"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 1"},
      "holder": {"type": "text", "value": "Institution0SharedObject1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0SharedObject1",
    "uri": "http://example.com/institution0/shared/object1",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/2",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject2Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject2Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0SharedObject2",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject2 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject2 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 2"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 3",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-07"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-06",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject2 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject2 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 2"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 3",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 2"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 3",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 2"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 3",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject2 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject2 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0SharedObject2 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 2"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 3",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 2"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 3",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 2"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 3",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 2"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 3",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 2"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 2"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 3",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 2"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 3",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 2"},
      "holder": {"type": "text", "value": "Institution0SharedObject2 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0SharedObject2",
    "uri": "http://example.com/institution0/shared/object2",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution0/collection0"],
    "institutionUri": "http://example.com/institution0",
    "page": "http://example.com/object/3",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject3Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution0SharedObject3Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution0SharedObject3",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject3 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution0SharedObject3 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 3"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 4",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-06"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-05",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject3 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution0SharedObject3 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 3"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 4",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 3"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 4",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 3"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 4",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject3 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution0SharedObject3 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 4",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution0SharedObject3 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 3"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 4",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 3"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 4",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 3"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 4",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 3"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 4",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 3"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 4",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 4",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 3"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 4",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 3"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 4",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/3"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 3"},
      "holder": {"type": "text", "value": "Institution0SharedObject3 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution0SharedObject3",
    "uri": "http://example.com/institution0/shared/object3",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/0",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object0Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object0Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1Collection0Object0",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object0 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object0 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 0"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 1",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-09",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object0 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object0 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 0"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 1",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 0"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 1",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 0"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 1",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object0 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object0 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 0",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1Collection0Object0 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 0"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 1",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 0"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 1",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 0"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 1",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 0"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 1",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 0"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 0",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 0"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 1",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 0"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 1",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 0"},
      "holder": {"type": "text", "value": "Institution1Collection0Object0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1Collection0Object0",
    "uri": "http://example.com/institution1/collection0/object0",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/1",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object1Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object1Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1Collection0Object1",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object1 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object1 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 1"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 2",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-07",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object1 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object1 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 1"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 2",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 1"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 2",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 1"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 2",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object1 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object1 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1Collection0Object1 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 1"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 2",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 1"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 2",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 1"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 2",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 1"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 2",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 1"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 1"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 2",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 1"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 2",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/1"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 1"},
      "holder": {"type": "text", "value": "Institution1Collection0Object1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1Collection0Object1",
    "uri": "http://example.com/institution1/collection0/object1",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/2",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object2Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object2Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1Collection0Object2",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object2 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object2 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 2"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 3",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-07"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-06",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object2 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object2 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 2"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 3",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 2"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 3",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 2"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 3",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object2 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object2 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1Collection0Object2 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 2"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 3",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 2"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 3",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 2"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 3",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 2"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 3",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 2"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 2"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 3",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 2"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 3",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 2"},
      "holder": {"type": "text", "value": "Institution1Collection0Object2 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1Collection0Object2",
    "uri": "http://example.com/institution1/collection0/object2",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/3",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object3Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1Collection0Object3Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1Collection0Object3",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object3 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1Collection0Object3 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 3"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 4",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-06"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-05",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object3 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1Collection0Object3 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 3"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 4",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 3"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 4",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 3"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 4",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object3 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1Collection0Object3 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 4",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1Collection0Object3 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 3"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 4",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 3"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 4",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 3"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 4",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 3"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 4",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 3"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 4",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 4",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 3"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 4",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 3"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 4",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/3"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 3"},
      "holder": {"type": "text", "value": "Institution1Collection0Object3 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1Collection0Object3",
    "uri": "http://example.com/institution1/collection0/object3",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/0",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject0Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject0Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1SharedObject0",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject0 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject0 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 0"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 1",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-09",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject0 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject0 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 0"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 1",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 0"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 1",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 0"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 1",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject0 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject0 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 0",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1SharedObject0 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 0"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 1",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 0"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 1",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 0"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 1",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 0"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 1",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 0"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 0",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 0"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 1",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 0"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 1",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 0"},
      "holder": {"type": "text", "value": "Institution1SharedObject0 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1SharedObject0",
    "uri": "http://example.com/institution1/shared/object0",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/1",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject1Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject1Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1SharedObject1",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject1 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject1 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 1"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 2",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-08"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-07",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject1 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject1 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 1"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 2",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 1"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 2",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 1"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 2",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject1 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject1 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1SharedObject1 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 1"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 2",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 1"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 2",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 1"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 2",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 1"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 2",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 1"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 1",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 1"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 2",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 1"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 2",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/1"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 1"},
      "holder": {"type": "text", "value": "Institution1SharedObject1 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1SharedObject1",
    "uri": "http://example.com/institution1/shared/object1",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/2",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject2Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject2Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1SharedObject2",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject2 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject2 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 2"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 3",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-07"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-06",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject2 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject2 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 2"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 3",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 2"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 3",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 2"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 3",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject2 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject2 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 2",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1SharedObject2 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 2"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 3",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 2"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 3",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 2"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 3",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 2"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 3",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 2"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 2",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 2"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 3",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 2"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 3",
    }],
    "rights": {
      "creator": {"type": "text", "value": "Creator 2"},
      "holder": {"type": "text", "value": "Institution1SharedObject2 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1SharedObject2",
    "uri": "http://example.com/institution1/shared/object2",
  }, {
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    "collectionUris": ["http://example.com/institution1/collection0"],
    "institutionUri": "http://example.com/institution1",
    "page": "http://example.com/object/3",
    "properties": [{
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject3Id0",
    }, {
      "uri": "http://purl.org/dc/terms/identifier",
      "value": "Institution1SharedObject3Id1",
    }, {
      "uri": "http://purl.org/dc/terms/title",
      "value": "Institution1SharedObject3",
    }, {
      "uri": "http://purl.org/dc/terms/abstract",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject3 alternative title 0",
    }, {
      "uri": "http://purl.org/dc/terms/alternative",
      "value": "Institution1SharedObject3 alternative title 1",
    }, {"uri": "http://purl.org/dc/terms/creator", "value": "Creator 3"}, {
      "uri": "http://purl.org/dc/terms/creator",
      "value": "Creator 4",
    }, {"uri": "http://purl.org/dc/terms/date", "value": "2020-08-06"}, {
      "uri": "http://purl.org/dc/terms/date",
      "value": "2020-08-05",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae.",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject3 description 0",
    }, {
      "uri": "http://purl.org/dc/terms/description",
      "value": "Institution1SharedObject3 description 1",
    }, {"uri": "http://purl.org/dc/terms/extent", "value": "Extent 3"}, {
      "uri": "http://purl.org/dc/terms/extent",
      "value": "Extent 4",
    }, {"uri": "http://purl.org/dc/terms/language", "value": "Language 3"}, {
      "uri": "http://purl.org/dc/terms/language",
      "value": "Language 4",
    }, {"uri": "http://purl.org/dc/terms/medium", "value": "Medium 3"}, {
      "uri": "http://purl.org/dc/terms/medium",
      "value": "Medium 4",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject3 provenance 0",
    }, {
      "uri": "http://purl.org/dc/terms/provenance",
      "value": "Institution1SharedObject3 provenance 1",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 3",
    }, {
      "uri": "http://purl.org/dc/terms/publisher",
      "value": "Publisher 4",
    }, {
      "uri": "http://purl.org/dc/terms/rightsHolder",
      "value": "Institution1SharedObject3 rights holder",
    }, {"uri": "http://purl.org/dc/terms/source", "value": "Source 3"}, {
      "uri": "http://purl.org/dc/terms/source",
      "value": "Source 4",
    }, {"uri": "http://purl.org/dc/terms/spatial", "value": "Spatial 3"}, {
      "uri": "http://purl.org/dc/terms/spatial",
      "value": "Spatial 4",
    }, {"uri": "http://purl.org/dc/terms/subject", "value": "Subject 3"}, {
      "uri": "http://purl.org/dc/terms/subject",
      "value": "Subject 4",
    }, {"uri": "http://purl.org/dc/terms/temporal", "value": "Temporal 3"}, {
      "uri": "http://purl.org/dc/terms/temporal",
      "value": "Temporal 4",
    }, {"uri": "http://purl.org/dc/terms/type", "value": "Type 3"}, {
      "uri": "http://purl.org/dc/terms/type",
      "value": "Type 4",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 3",
    }, {
      "uri": "http://purl.org/vra/culturalContext",
      "value": "Cultural context 4",
    }, {"uri": "http://purl.org/vra/hasTechnique", "value": "Technique 3"}, {
      "uri": "http://purl.org/vra/hasTechnique",
      "value": "Technique 4",
    }, {"uri": "http://purl.org/vra/material", "value": "Material 3"}, {
      "uri": "http://purl.org/vra/material",
      "value": "Material 4",
    }, {"uri": "http://xmlns.com/foaf/0.1/page", "value": "http://example.com/object/3"}],
    "rights": {
      "creator": {"type": "text", "value": "Creator 3"},
      "holder": {"type": "text", "value": "Institution1SharedObject3 rights holder"},
      "license": {"type": "uri", "value": "http://creativecommons.org/licenses/nc/1.0/"},
      "statement": {"type": "uri", "value": "http://rightsstatements.org/vocab/InC-EDU/1.0/"},
    },
    "title": "Institution1SharedObject3",
    "uri": "http://example.com/institution1/shared/object3",
  }],
  "propertyDefinitions": [{"label": "Identifier", "uri": "http://purl.org/dc/terms/identifier"}, {
    "label": "Title",
    "uri": "http://purl.org/dc/terms/title",
  }, {"label": "Abstract", "uri": "http://purl.org/dc/terms/abstract"}, {
    "label": "Alternative title",
    "uri": "http://purl.org/dc/terms/alternative",
  }, {
    "label": "Bibliographic citation",
    "uri": "http://purl.org/dc/terms/bibliographicCitation",
  }, {"label": "Contributor", "uri": "http://purl.org/dc/terms/contributor"}, {
    "label": "Coverage",
    "uri": "http://purl.org/dc/terms/coverage",
  }, {"label": "Creator", "uri": "http://purl.org/dc/terms/creator"}, {
    "label": "Date",
    "uri": "http://purl.org/dc/terms/date",
  }, {"label": "Date created", "uri": "http://purl.org/dc/terms/dateCreated"}, {
    "label": "Date submitted",
    "uri": "http://purl.org/dc/terms/dateSubmitted",
  }, {"label": "Description", "uri": "http://purl.org/dc/terms/description"}, {
    "label": "Extent",
    "uri": "http://purl.org/dc/terms/extent",
  }, {"label": "Format", "uri": "http://purl.org/dc/terms/format"}, {
    "label": "Referenced by",
    "uri": "http://purl.org/dc/terms/isReferencedBy",
  }, {"label": "Language", "uri": "http://purl.org/dc/terms/language"}, {
    "label": "License",
    "uri": "http://purl.org/dc/terms/license",
  }, {"label": "Medium", "uri": "http://purl.org/dc/terms/medium"}, {
    "label": "Provenance",
    "uri": "http://purl.org/dc/terms/provenance",
  }, {"label": "Publisher", "uri": "http://purl.org/dc/terms/publisher"}, {
    "label": "References",
    "uri": "http://purl.org/dc/terms/references",
  }, {"label": "Relation", "uri": "http://purl.org/dc/terms/relation"}, {
    "label": "Rights",
    "uri": "http://purl.org/dc/terms/rights",
  }, {"label": "Rights holder", "uri": "http://purl.org/dc/terms/rightsHolder"}, {
    "label": "Source",
    "uri": "http://purl.org/dc/terms/source",
  }, {"label": "Spatial coverage", "uri": "http://purl.org/dc/terms/spatial"}, {
    "label": "Subject",
    "uri": "http://purl.org/dc/terms/subject",
  }, {"label": "Temporal coverage", "uri": "http://purl.org/dc/terms/temporal"}, {
    "label": "Type",
    "uri": "http://purl.org/dc/terms/type",
  }, {"label": "Cultural context", "uri": "http://purl.org/vra/culturalContext"}, {
    "label": "Earliest date",
    "uri": "http://purl.org/vra/earliestDate",
  }, {"label": "Technique", "uri": "http://purl.org/vra/hasTechnique"}, {
    "label": "Inscription",
    "uri": "http://purl.org/vra/inscription",
  }, {"label": "Latest date", "uri": "http://purl.org/vra/latestDate"}, {
    "label": "Material",
    "uri": "http://purl.org/vra/material",
  }, {"label": "Measurements", "uri": "http://purl.org/vra/measurements"}, {
    "label": "Style Period",
    "uri": "http://purl.org/vra/stylePeriod",
  }, {"label": "Work type", "uri": "http://purl.org/vra/worktype"}],
  "rightsStatements": [{
    "definition": "The copyright and related rights status of this Item has not been evaluated.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
    "description": "This Rights Statement indicates that the organization that has published the Item has not evaluated the copyright and related rights status of the Item.",
    "identifier": "CNE",
    "prefLabel": "Copyright Not Evaluated",
    "uri": "http://rightsstatements.org/vocab/CNE/1.0/",
  }, {
    "definition": "This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for non-commercial uses.\n\n  For other uses you need to obtain permission from the rights-holder(s).",
    "description": "This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright but that non-commercial use is allowed without the need to obtain additional permission.",
    "identifier": "InC-NC",
    "prefLabel": "In Copyright - Non-Commercial Use Permitted",
    "uri": "http://rightsstatements.org/vocab/InC-NC/1.0/",
  }, {
    "definition": "This Item has been identified as an orphan work in the country of first publication and in line with Directive 2012/28/EU of the European Parliament and of the Council of 25 October 2012 on certain permitted uses of orphan works.\n\n  For this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located even though a diligent search for the rights-holder(s) has been conducted. The results of the diligent search are available in the EU Orphan Works Database.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
    "description": "This Rights Statement indicates that the Item labeled with this Rights Statement has been identified as an ‘Orphan Work’ under the terms of the EU Orphan Works Directive.",
    "identifier": "InC-OW-EU",
    "prefLabel": "In Copyright - EU Orphan Work",
    "uri": "http://rightsstatements.org/vocab/InC-OW-EU/1.0/",
  }, {
    "definition": "This Item is protected by copyright and/or related rights. However, for this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
    "description": "This Rights Statement indicates that the Item labeled with this Rights Statement has been identified as in copyright, but its rights-holder(s) either cannot be identified or cannot be located.",
    "identifier": "InC-RUU",
    "prefLabel": "In Copyright - Rights-holder(s) Unlocatable or Unidentifiable",
    "uri": "http://rightsstatements.org/vocab/InC-RUU/1.0/",
  }, {
    "definition": "This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.\n\n  For other uses you need to obtain permission from the rights-holder(s).",
    "description": "This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright.",
    "identifier": "InC",
    "prefLabel": "In Copyright",
    "uri": "http://rightsstatements.org/vocab/InC/1.0/",
  }, {
    "definition": "The organization that has made the Item available reasonably believes that the Item is not restricted by copyright or related rights, but a conclusive determination could not be made.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
    "description": "This Rights Statement indicates that the organization that has published the Item believes that no copyright or related rights are known to exist for the Item, but that a conclusive determination could not be made.",
    "identifier": "NKC",
    "prefLabel": "No Known Copyright",
    "uri": "http://rightsstatements.org/vocab/NKC/1.0/",
  }, {
    "definition": "Use of this Item is not restricted by copyright and/or related rights.\n\n  As part of the acquisition or digitization of this Work, the organization that has made the Item available is contractually required to limit the use of this Item. Limitations may include, but are not limited to, privacy issues, cultural protections, digitization agreements or donor agreements.\n\n  Please refer to the organization that has made the Item available for more information.",
    "description": "This Rights Statement indicates that the underlying Work is in the Public Domain, but the organization that has published the Item is contractually required to restrict certain forms of use by third parties.",
    "identifier": "NoC-CR",
    "prefLabel": "No Copyright - Contractual Restrictions",
    "uri": "http://rightsstatements.org/vocab/NoC-CR/1.0/",
  }, {
    "definition": "This Work has been digitized in a public-private partnership. As part of this partnership, the partners have agreed to limit commercial uses of this digital representation of the Work by third parties.\n\n  You can, without permission, copy, modify, distribute, display, or perform the Item, for non-commercial uses. For any other permissible uses, please review the terms and conditions of the organization that has made the Item available.",
    "description": "This Rights Statement indicates that the underlying Work is in the Public Domain, but the organization that has published the Item is contractually required to allow only non-commercial use by third parties.",
    "identifier": "NoC-NC",
    "prefLabel": "No Copyright - Non-Commercial Use Only",
    "uri": "http://rightsstatements.org/vocab/NoC-NC/1.0/",
  }, {
    "definition": "Use of this Item is not restricted by copyright and/or related rights.\n\n  In one or more jurisdictions, laws other than copyright are known to impose restrictions on the use of this Item.\n\n  Please refer to the organization that has made the Item available for more information.",
    "description": "This Rights Statement indicates that the underlying Work is in the Public Domain, but that there are known restrictions imposed by laws other than copyright and/or related rights on the use of the Item by third parties.",
    "identifier": "NoC-OKLR",
    "prefLabel": "No Copyright - Other Known Legal Restrictions",
    "uri": "http://rightsstatements.org/vocab/NoC-OKLR/1.0/",
  }, {
    "definition": "The organization that has made the Item available believes that the Item is in the Public Domain under the laws of the United States, but a determination was not made as to its copyright status under the copyright laws of other countries. The Item may not be in the Public Domain under the laws of other countries.\n\n  Please refer to the organization that has made the Item available for more information.",
    "description": "This Rights Statement indicates that the Item is in the Public Domain under the laws of the United States, but that a determination was not made as to its copyright status under the copyright laws of other countries.",
    "identifier": "NoC-US",
    "prefLabel": "No Copyright - United States",
    "uri": "http://rightsstatements.org/vocab/NoC-US/1.0/",
  }, {
    "definition": "The copyright and related rights status of this Item has been reviewed by the organization that has made the Item available, but the organization was unable to make a conclusive determination as to the copyright status of the Item.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
    "description": "This Rights Statement indicates that the organization that has made the Item available has reviewed the copyright and related rights status of the Item, but was unable to determine the copyright status of the Item.",
    "identifier": "UND",
    "prefLabel": "Copyright Undetermined",
    "uri": "http://rightsstatements.org/vocab/UND/1.0/",
  }, {
    "definition": null,
    "description": "None",
    "identifier": "collection-ic",
    "prefLabel": "Statements for works that are in copyright",
    "uri": "http://rightsstatements.org/vocab/collection-ic/1.0/",
  }, {
    "definition": null,
    "description": "None",
    "identifier": "collection-nc",
    "prefLabel": "Statements for works that are not in copyright",
    "uri": "http://rightsstatements.org/vocab/collection-nc/1.0/",
  }, {
    "definition": null,
    "description": "None",
    "identifier": "collection-other",
    "prefLabel": "Statements for works where the copyright status is unclear",
    "uri": "http://rightsstatements.org/vocab/collection-other/1.0/",
  }, {
    "definition": "This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for educational uses.\n\n  For other uses, you need to obtain permission from the rights-holder(s).",
    "description": "This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright but that educational use is allowed without the need to obtain additional permission.",
    "identifier": "InC-EDU",
    "prefLabel": "In Copyright - Educational Use Permitted",
    "uri": "http://rightsstatements.org/vocab/InC-EDU/1.0/",
  }],
};