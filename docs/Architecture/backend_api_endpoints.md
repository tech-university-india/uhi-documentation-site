---
slug: backend-api-endpoints
title: API Endpoints
sidebar_position: 4
---
import "swagger-ui-react/swagger-ui.css"

import SwaggerUI from "swagger-ui-react"
import jsonEndpoints from './endpoints.json';


<SwaggerUI
    spec={jsonEndpoints}
     />