/**
 * Created by admin on 17/12/22.
 */

export const calculateCount = count => count > 10000 && ((count / 10000).toFixed(0) + '万') || count
