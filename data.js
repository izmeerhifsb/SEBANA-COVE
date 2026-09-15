var APP_DATA = {
  "scenes": [
    {
      "id": "0-bed-area",
      "name": "BED AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5460888339096854,
        "pitch": -0.0032459423669806142,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 2.9570653496677837,
          "pitch": 0.009628107168163424,
          "rotation": 6.283185307179586,
          "target": "1-wardrobe-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6124100672692165,
          "pitch": 0.41923677498496303,
          "title": "Side Table",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-wardrobe-area",
      "name": "WARDROBE AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0016131441926283685,
        "pitch": -0.004991368772326865,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.13557424954093733,
          "pitch": 0.05137326386674168,
          "rotation": 0,
          "target": "0-bed-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5714922307472943,
          "pitch": 0.38610717296404395,
          "title": "Mini Pantry",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
