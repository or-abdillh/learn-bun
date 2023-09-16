Bun.serve({
    port: 8000,
    development: true,
    fetch(req: Request): Response | Promise<Response> {

        return new Response("Hello from Bun")
    }
})