/**
 * FingerprintJS Pro Cloudflare Worker v1.0.0 - Copyright (c) FingerprintJS, Inc, 2022 (https://fingerprint.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

declare type WorkerEnv = {
    WORKER_PATH: string | null;
    AGENT_SCRIPT_DOWNLOAD_PATH: string | null;
    GET_RESULT_PATH: string | null;
};

declare const _default: {
    fetch(request: Request, env: WorkerEnv): Promise<Response>;
};

export { _default as default };
