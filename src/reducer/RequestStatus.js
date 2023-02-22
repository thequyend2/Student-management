/**
 * Trạng thái 1: Không có trạng thái.
 */
export const NONREQUEST = 1;

/**
 * Trạng thái 2: Đang thực hiện.
 */
export const REQUESTING = 2;

/**
 * Trạng thái 3: Đã thực hiện xong, và thất bại.
 */
export const REQUESFAIL = 3;

/**
 * Trạng thái 4: Đã thực hiện xong, và thành công.
 */
export const REQUESTSUCCESS = 4;

/**
 * Kiểm tra trạng thái request đang không có trạng thái
 * @param {number} state biến trạng thái của request
 * @returns true nếu request đang không có trạng thái (trạng thái rỗng 1)
 */
export const isNonRequest = (state) => state === NONREQUEST;

/**
 * Kiểm tra trạng thái request có đang được gọi hay không
 * @param {number} state biến trạng thái của request
 * @returns true nếu request đang được thực hiện (trạng thái đang thực hiện 2)
 */
export const isRequesting = (state) => state === REQUESTING;

/**
 * Kiểm tra trạng thái request có thất bại hay không
 * @param {number} state biến trạng thái của request
 * @returns true nếu request đã thực hiện bị thất bại (trạng thái thành công 3)
 */
export const isRequestFail = (state) => state === REQUESFAIL;

/**
 * Kiểm tra trạng thái request có thành công hay không
 * @param {number} state biến trạng thái của request
 * @returns true nếu request đã được thực hiện thành công (trạng thái thành công 4)
 */
export const isRequestSuccess = (state) => state === REQUESTSUCCESS;

/**
 * Kiểm tra trạng thái request đã được gọi xong hay chưa
 * @param {number} state biến trạng thái của request
 * @returns true nếu request đã được gọi xong (trạng thái thành công 4 hoặc thất bại 3)
 */
export const isRequested = (state) => state > REQUESTING;

/**
 * Kiểm tra trạng thái request chưa được gọi hoặc chưa gọi xong
 * @param {number} state biến trạng thái của request
 * @returns true nếu request chưa được gọi hoặc chưa gọi xong (không trạng thái 1 hoặc đang thực hiện 2)
 */
export const isNotRequested = (state) => state <= REQUESTING;
