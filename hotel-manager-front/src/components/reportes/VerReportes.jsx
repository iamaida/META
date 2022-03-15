import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

export default function VerReportes() {
  return (
    <div>VerReportes
        <PowerBIEmbed
            embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: 'f7ded411-8e69-4b4b-9be3-15f369501541',
                embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f7ded411-8e69-4b4b-9be3-15f369501541&groupId=aa09dafd-d25d-45e2-a292-786c37259067&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d',
                accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQ3NjZlZGQtOGJlYS00Yzk5LTg2NzItNTZkMWNhYmMyNzA2LyIsImlhdCI6MTY0NzI3MDI5NCwibmJmIjoxNjQ3MjcwMjk0LCJleHAiOjE2NDcyNzQ2OTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFReUt2VFIxb29kM256QzZmQjlLZC96VTFSSTVDK2lEeHhUbGlRYy9FRjhzVlJaa1hyRzZvbDRlT2Z4K3QrU3lFIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiR2FyY2lhIiwiZ2l2ZW5fbmFtZSI6Ikp1YW4gRGllZ28iLCJpcGFkZHIiOiIxODEuNjIuMjI5Ljg2IiwibmFtZSI6Ikp1YW4gRGllZ28gR2FyY2lhIiwib2lkIjoiMWI2NGFkMzItMzllMC00Y2IyLThmNzQtYzQzNjRkNWJmNWRmIiwicHVpZCI6IjEwMDMyMDAwOUY0NkRDNkIiLCJyaCI6IjAuQVJjQTNXNTJfZXFMbVV5R2NsYlJ5cnduQmdrQUFBQUFBQUFBd0FBQUFBQUFBQUFYQU80LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IllBQVZqYzhGd2NoV1BjbDRxYWhjNnVsenRrcHhYSnl2R251cEVUcGJHbkkiLCJ0aWQiOiJmZDc2NmVkZC04YmVhLTRjOTktODY3Mi01NmQxY2FiYzI3MDYiLCJ1bmlxdWVfbmFtZSI6Imp1YW4uZ2FyY2lhLmVAY29ycmVvdW5pdmFsbGUuZWR1LmNvIiwidXBuIjoianVhbi5nYXJjaWEuZUBjb3JyZW91bml2YWxsZS5lZHUuY28iLCJ1dGkiOiJYU3VJT3JyeGtrcXAyTGN4YmJkUUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.IImt_F9uVTlcmraMJ3YqIbVecbEP9HVXqQIs9TlBqeQezCuY33j78WP5OX9yAEK2kxRQUSHAE9SPxkDv_oqN8HBvzIo-Q6qpxwWfYhQbpTP3W4p0kEKZvvBtKHljRgbvFgjG8bRqmPobv12jFcO_g4VGTO3DR7P7TF3GwYZBf5F1kW-LJtVn80l8u3nBaeaAz9FrqLk1SQmVgpqUHML74ZxIi5zXjR_E_yQxbXJEg_MUpPFoRm2cPxU_jrghla7yqbfB_DY6uVNDIYh1zrLkUercm9cKKqZCYQf37zFx7CToB_n8iN2EpJzFOm6_Plk4ozWAfCPoB_UG4VMMZ7Ng5w',
                tokenType: models.TokenType.Aad,
                settings: {
                    panes: {
                        filters: {
                            expanded: false,
                            visible: false
                        }
                    },
                    background: models.BackgroundType.Transparent,
                }
            }}

            eventHandlers = { 
                new Map([
                    ['loaded', function () {console.log('Report loaded');}],
                    ['rendered', function () {console.log('Report rendered');}],
                    ['error', function (event) {console.log(event.detail);}]
                ])
            }
                
            cssClassName = { "report-style-class" }

            getEmbeddedComponent = { (embeddedReport) => {
                window.report = embeddedReport;
            }}
        />
    </div>
  )
}
